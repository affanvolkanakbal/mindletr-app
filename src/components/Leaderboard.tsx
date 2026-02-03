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
    let userScore = 0;

    // Firebase'den gelen veriyi kullan, localStorage'a bakma
    switch (activeTab) {
      case 'weekly':
        entries = [...weeklyEntries];
        const weeklyUser = entries.find(e => e.username === currentUsername);
        userScore = weeklyUser ? weeklyUser.score : 0;
        break;
      case 'monthly':
        entries = [...monthlyEntries];
        const monthlyUser = entries.find(e => e.username === currentUsername);
        userScore = monthlyUser ? monthlyUser.score : 0;
        break;
      case 'daily':
      default:
        entries = [...dailyEntries];
        // Günlük skor için hala anlık state'i kullanabiliriz (daha hızlı feedback için)
        // Ama güvenlik isteniyorsa burası da Firebase'den beklenebilir.
        // Şimdilik kullanıcı deneyimi için state'den gelen skoru kullanıyoruz,
        // çünkü Firebase'e yazma işlemi asenkron olabilir.
        userScore = currentUserScore;
        break;
    }

    // Merge current user into the list
    const userIndex = entries.findIndex(e => e.username === currentUsername);
    
    if (userIndex !== -1) {
      // Eğer listede varsa, Firebase verisini kullan (Daily hariç)
      if (activeTab === 'daily') {
         entries[userIndex].score = Math.max(entries[userIndex].score, userScore);
      }
      entries[userIndex].isCurrentUser = true;
    } else if (userScore > 0) {
      // Listede yoksa ama puanı varsa ekle
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
          <span className="rank">#</span>
          <span className="username">Kullanıcı</span>
          <span className="score">Puan</span>
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
