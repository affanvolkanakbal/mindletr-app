import React, { useState } from 'react';
import { LeaderboardEntry } from '../data/leaderboard';

type TimeFrame = 'daily' | 'weekly' | 'monthly';

interface LeaderboardProps {
  dailyEntries: LeaderboardEntry[];
  weeklyEntries: LeaderboardEntry[];
  monthlyEntries: LeaderboardEntry[];
  currentUserScore: number;
  currentUsername: string;
}

interface DisplayEntry extends LeaderboardEntry {
  rank: number;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ 
  dailyEntries, 
  weeklyEntries, 
  monthlyEntries, 
  currentUserScore, 
  currentUsername 
}) => {
  const [activeTab, setActiveTab] = useState<TimeFrame>('daily');

  const getCurrentData = (): DisplayEntry[] => {
    let entries: LeaderboardEntry[] = [];
    let userScore = currentUserScore;

    // Kullanıcı geçmişini localStorage'dan al
    const historyStr = localStorage.getItem('mindle_user_history');
    const history: { date: string, score: number }[] = historyStr ? JSON.parse(historyStr) : [];
    
    // Bugünün skorunu geçmişe ekle (eğer yoksa)
    const today = new Date().toISOString().split('T')[0];
    const todayEntry = history.find(h => h.date === today);
    if (!todayEntry && currentUserScore > 0) {
      history.push({ date: today, score: currentUserScore });
    } else if (todayEntry && currentUserScore > todayEntry.score) {
      todayEntry.score = currentUserScore;
    }

    switch (activeTab) {
      case 'weekly':
        entries = [...weeklyEntries];
        // Haftalık: Pazartesi 00:01 - Pazar 23:59
        const now = new Date();
        const day = now.getUTCDay();
        const diff = now.getUTCDate() - day + (day === 0 ? -6 : 1);
        const startOfWeek = new Date(now);
        startOfWeek.setUTCDate(diff);
        startOfWeek.setUTCHours(0, 0, 0, 0);

        userScore = history
          .filter(h => new Date(h.date) >= startOfWeek)
          .reduce((sum, h) => sum + h.score, 0);
        break;
      case 'monthly':
        entries = [...monthlyEntries];
        // Aylık: Pazartesi'den başlayarak 4. Pazar'ın 23:59'una kadar (4 haftalık periyot)
        const nowM = new Date();
        const dayM = nowM.getUTCDay();
        const diffM = nowM.getUTCDate() - dayM + (dayM === 0 ? -6 : 1);
        const startOfWeekM = new Date(nowM);
        startOfWeekM.setUTCDate(diffM);
        startOfWeekM.setUTCHours(0, 0, 0, 0);
        
        const startOfMonth = new Date(startOfWeekM);
        startOfMonth.setUTCDate(startOfMonth.getUTCDate() - 21); // 3 hafta geri (toplam 4 hafta)

        userScore = history
          .filter(h => new Date(h.date) >= startOfMonth)
          .reduce((sum, h) => sum + h.score, 0);
        break;
      case 'daily':
      default:
        entries = [...dailyEntries];
        userScore = currentUserScore;
        break;
    }

    // Merge current user into the list
    const userIndex = entries.findIndex(e => e.username === currentUsername);
    
    if (userIndex !== -1) {
      entries[userIndex].score = userScore;
      entries[userIndex].isCurrentUser = true;
    } else {
      entries.push({
        username: currentUsername,
        score: userScore,
        isCurrentUser: true
      });
    }

    // Sort by score descending
    entries.sort((a, b) => b.score - a.score);

    // Find user's rank (0-based index)
    const userRankIndex = entries.findIndex(e => e.isCurrentUser);

    // Logic: Show top 9, and if user is not in top 9, show user as 10th item
    if (userRankIndex < 9) {
      // User is in top 9, just show top 10 normally
      return entries.slice(0, 10).map((entry, index) => ({
        ...entry,
        rank: index + 1
      }));
    } else {
      // User is outside top 9
      const top9 = entries.slice(0, 9).map((entry, index) => ({
        ...entry,
        rank: index + 1
      }));
      
      const userEntry = {
        ...entries[userRankIndex],
        rank: userRankIndex + 1
      };

      return [...top9, userEntry];
    }
  };

  const topEntries = getCurrentData();

  return (
    <div className="leaderboard-container">
      <h3 className="leaderboard-title">🏆 Lider Tablosu</h3>
      
      <div className="leaderboard-tabs">
        <button 
          className={`tab-button ${activeTab === 'daily' ? 'active' : ''}`}
          onClick={() => setActiveTab('daily')}
        >
          Günlük
        </button>
        <button 
          className={`tab-button ${activeTab === 'weekly' ? 'active' : ''}`}
          onClick={() => setActiveTab('weekly')}
        >
          Haftalık
        </button>
        <button 
          className={`tab-button ${activeTab === 'monthly' ? 'active' : ''}`}
          onClick={() => setActiveTab('monthly')}
        >
          Aylık
        </button>
      </div>

      <div className="leaderboard-table">
        <div className="leaderboard-header">
          <span>#</span>
          <span>Kullanıcı</span>
          <span>Puan</span>
        </div>
        {topEntries.map((entry, index) => (
          <div 
            key={index} 
            className={`leaderboard-row ${entry.isCurrentUser ? 'current-user' : ''}`}
          >
            <span className="rank">{entry.rank}</span>
            <span className="username">{entry.username} {entry.isCurrentUser && '(Sen)'}</span>
            <span className="score">{entry.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
