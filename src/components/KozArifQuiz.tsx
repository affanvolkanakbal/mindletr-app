import React, { useEffect, useState } from 'react';
import '../App.css';
import { KOZ_ARIF_QUESTIONS } from '../data/kozarifquestions';
import CookieBanner from './CookieBanner';
import Leaderboard from './Leaderboard';
import Footer from './Footer';
import { getOrCreateUsername } from '../utils/usernameGenerator';
import { db, auth } from '../firebase';
import { signInAnonymously } from 'firebase/auth';
import { ref, set, get, onValue } from 'firebase/database';
import { getWeekIdFromDateStr, getMonthIdFromDateStr } from '../utils/dateHelpers';

// Deterministik rastgele sayı üreteci
const seededRandom = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 32-bit integer'a dönüştür
  }
  return (hash % 10000) / 10000;
};

// Günlük Koz Arif soruları getiren fonksiyon
const getDailyKozArifQuestions = () => {
  const today = new Date().toDateString();
  const questions = [...KOZ_ARIF_QUESTIONS];

  // Seed ile karıştırma (Fisher-Yates shuffle)
  const seed = today;

  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i.toString()) * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  // İlk 10 soruyu al (veya tümü varsa tümünü)
  return questions.slice(0, Math.min(10, questions.length));
};

const KozArifQuiz = () => {
  useEffect(() => {
    try {
      signInAnonymously(auth)
      .then(() => console.log('Anonim giriş başarılı'))
      .catch((error: any) => console.log('Giriş hatası:', error));
    } catch (error) {
      console.log('Firebase auth error:', error);
    }
  }, []);

  const [dailyQuestions, setDailyQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [totalTime, setTotalTime] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [lastScore, setLastScore] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [username, setUsername] = useState<string>('');
  const [dailyLeaderboard, setDailyLeaderboard] = useState<any[]>([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState<any[]>([]);
  const [monthlyLeaderboard, setMonthlyLeaderboard] = useState<any[]>([]);

  useEffect(() => {
    initializeGame();
    setUsername(getOrCreateUsername());

    // Firebase Leaderboard Listeners
    try {
      const today = new Date().toDateString();
      const weekId = getWeekIdFromDateStr(today);
      const monthId = getMonthIdFromDateStr(today);

      // Daily Leaderboard
      const dailyRef = ref(db, `koz_arif_daily_scores/${today}`);
      const unsubscribeDaily = onValue(dailyRef, (snapshot: any) => {
        const data = snapshot.val();
        if (data) {
          const leaderboard = Object.values(data).sort((a: any, b: any) => b.score - a.score);
          setDailyLeaderboard(leaderboard);
        }
      });

      // Weekly Leaderboard
      const weeklyRef = ref(db, `koz_arif_weekly_scores/${weekId}`);
      const unsubscribeWeekly = onValue(weeklyRef, (snapshot: any) => {
        const data = snapshot.val();
        if (data) {
          const leaderboard = Object.values(data).sort((a: any, b: any) => b.score - a.score);
          setWeeklyLeaderboard(leaderboard);
        }
      });

      // Monthly Leaderboard
      const monthlyRef = ref(db, `koz_arif_monthly_scores/${monthId}`);
      const unsubscribeMonthly = onValue(monthlyRef, (snapshot: any) => {
        const data = snapshot.val();
        if (data) {
          const leaderboard = Object.values(data).sort((a: any, b: any) => b.score - a.score);
          setMonthlyLeaderboard(leaderboard);
        }
      });

      return () => {
        unsubscribeDaily();
        unsubscribeWeekly();
        unsubscribeMonthly();
      };
    } catch (error) {
      console.log('Firebase read error:', error);
      // Continue without Firebase - leaderboard will be empty
    }
  }, []);

  const initializeGame = async () => {
    setLoading(true);
    const questions = getDailyKozArifQuestions();
    setDailyQuestions(questions);

    const lastPlayedDate = localStorage.getItem('koz_arif_lastPlayedDate');
    const today = new Date().toDateString();

    if (lastPlayedDate === today) {
      setAlreadyPlayed(true);
      const lastScoreStr = localStorage.getItem('koz_arif_lastScore');
      if (lastScoreStr) {
        setLastScore(parseInt(lastScoreStr, 10));
      }
    }

    setLoading(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setShowStartScreen(false);
    setStartTime(Date.now());
    setTimeLeft(30);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null || gameOver) return;

    setSelectedAnswer(answerIndex);
    const newSelectedAnswers = [...selectedAnswers, answerIndex];
    setSelectedAnswers(newSelectedAnswers);

    const isCorrect = answerIndex === dailyQuestions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < dailyQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setTimeLeft(30);
      } else {
        endGame();
      }
    }, 1500);
  };

  const endGame = () => {
    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - startTime) / 1000);
    setTotalTime(timeSpent);
    setGameOver(true);

    // Save to localStorage
    const today = new Date().toDateString();
    localStorage.setItem('koz_arif_lastPlayedDate', today);
    localStorage.setItem('koz_arif_lastScore', score.toString());
    localStorage.setItem('koz_arif_selectedAnswers', JSON.stringify(selectedAnswers));

    // Save to Firebase
    try {
      if (auth.currentUser) {
        const today = new Date().toDateString();
        const weekId = getWeekIdFromDateStr(today);
        const monthId = getMonthIdFromDateStr(today);

        const scoreData = {
          username,
          score,
          time: timeSpent,
          timestamp: Date.now()
        };

        // Daily score
        set(ref(db, `koz_arif_daily_scores/${today}/${auth.currentUser.uid}`), scoreData);

        // Weekly score (accumulate)
        get(ref(db, `koz_arif_weekly_scores/${weekId}/${auth.currentUser.uid}`)).then((snapshot: any) => {
          const existing = snapshot.val();
          const newWeeklyScore = existing ? Math.max(existing.score, score) : score;
          set(ref(db, `koz_arif_weekly_scores/${weekId}/${auth.currentUser.uid}`), {
            username,
            score: newWeeklyScore,
            time: existing ? Math.min(existing.time, timeSpent) : timeSpent,
            timestamp: Date.now()
          });
        });

        // Monthly score (accumulate)
        get(ref(db, `koz_arif_monthly_scores/${monthId}/${auth.currentUser.uid}`)).then((snapshot: any) => {
          const existing = snapshot.val();
          const newMonthlyScore = existing ? Math.max(existing.score, score) : score;
          set(ref(db, `koz_arif_monthly_scores/${monthId}/${auth.currentUser.uid}`), {
            username,
            score: newMonthlyScore,
            time: existing ? Math.min(existing.time, timeSpent) : timeSpent,
            timestamp: Date.now()
          });
        });
      }
    } catch (error) {
      console.log('Firebase write error:', error);
      // Continue without Firebase - scores will still be saved locally
    }
  };

  useEffect(() => {
    if (gameStarted && !gameOver && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameStarted && !gameOver) {
      handleAnswerSelect(-1); // Time out
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, gameStarted, gameOver]);

  const shareOnWhatsApp = () => {
    const message = `🧠 Koz Arif Quiz'de ${score}/10 puan aldım! ⏱️ ${formatTime(totalTime)}\n\n#KozArif #MindleTR`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareOnX = () => {
    const message = `🧠 Koz Arif Quiz'de ${score}/10 puan aldım! ⏱️ ${formatTime(totalTime)}\n\n#KozArif #MindleTR`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareOnInstagram = () => {
    const message = `🧠 Koz Arif Quiz'de ${score}/10 puan aldım! ⏱️ ${formatTime(totalTime)}\n\n#KozArif #MindleTR`;
    navigator.clipboard.writeText(message);
    alert('Skor kopyalandı! Instagram hikayende paylaşabilirsin.');
    window.open('https://instagram.com', '_blank');
  };

  const shareGeneric = () => {
    const message = `🧠 Koz Arif Quiz'de ${score}/10 puan aldım! ⏱️ ${formatTime(totalTime)}\n\n#KozArif #MindleTR`;
    if (navigator.share) {
      navigator.share({
        title: 'Koz Arif Quiz Sonucu',
        text: message,
      });
    } else {
      navigator.clipboard.writeText(message);
      alert('Skor kopyalandı! İstediğin yerde paylaşabilirsin.');
    }
  };

  const progress = dailyQuestions.length > 0 ? ((currentQuestion + 1) / dailyQuestions.length) * 100 : 0;
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getCategoryColor = (categoryName: string) => {
    // Koz Arif için sabit renk
    return '#9b59b6'; // Mor renk
  };

  const getCategoryIcon = (categoryName: string) => {
    return '🧠'; // Beyin ikonu
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setSelectedAnswer(null);
    setTotalTime(0);
    setStartTime(0);
    setGameStarted(false);
    setShowStartScreen(true);
    setSelectedAnswers([]);
  };

  if (alreadyPlayed) {
    return (
      <div className="app-wrapper">
        <div className="main-content">
          <div className="container">
            <div className="result-container">
              <img src="/mindle-logo.png" alt="Mindle Logo" className="start-logo" />
              <p className="result-title">🎉 Bugünkü Koz Arif'i Tamamladın! 🎉</p>
              
              <div className="score-card">
                <p className="final-score">{lastScore}/10</p>
                <p className="score-label">Harika bir iş çıkardın!</p>
              </div>

              <div className="stats-container">
                <div className="stat-item">
                  <p className="stat-value">✅</p>
                  <p className="stat-label">Quiz Tamamlandı</p>
                </div>
                <div className="stat-item">
                  <p className="stat-value">🏆</p>
                  <p className="stat-label">Sıralamanı 
                    Kontrol Et!</p>
                </div>
              </div>

              <p className="ranking-info">
                ⚡ Sıralamada: Önce puan, sonra hız dikkate alınır
              </p>

              <Leaderboard 
                dailyEntries={dailyLeaderboard}
                weeklyEntries={weeklyLeaderboard}
                monthlyEntries={monthlyLeaderboard}
                currentUserScore={lastScore} 
                currentUsername={username} 
              />

              <div className="share-buttons-container">
                <button className="share-btn whatsapp" onClick={shareOnWhatsApp}>
                  WhatsApp
                </button>
                <button className="share-btn twitter" onClick={shareOnX}>
                  X
                </button>
                <button className="share-btn instagram" onClick={shareOnInstagram}>
                  Instagram
                </button>
                <button className="share-btn generic" onClick={shareGeneric}>
                  {typeof navigator.share !== 'undefined' ? 'Diğer' : 'Kopyala'}
                </button>
              </div>

              <button className="start-button secondary" onClick={() => { window.location.href = '/'; }} style={{ marginTop: 8 }}>
                <p className="start-button-text">Ana Sayfa</p>
              </button>

              <div className="tomorrow-card">
                <p className="tomorrow-emoji">⏰</p>
                <p className="tomorrow-text">Yeni Koz Arif için</p>
                <p className="tomorrow-time">YARINI BEKLE</p>
                <p className="tomorrow-info">Her gün 10 yeni bilmece ile zihnini test et!</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (showStartScreen) {
    return (
      <div className="app-wrapper">
        <div className="main-content">
          <div className="container">
            <div className="start-container">
              {/* Logo ekleniyor */}
              <img src="/mindle-logo.png" alt="Mindle Logo" className="start-logo" />
              
              <p className="start-title">🧠 Koz Arif Quiz</p>
              <p className="start-subtitle">10 Soruda Bilgini Test Et!</p>
              
              <div className="features-list">
                <div className="feature-item">
                  <p className="feature-icon">⏱️</p>
                  <p className="feature-text">30 saniye cevaplama süresi</p>
                </div>
                <div className="feature-item">
                  <p className="feature-icon">📚</p>
                  <p className="feature-text">10 Koz Arif sorusu</p>
                </div>
                <div className="feature-item">
                  <p className="feature-icon">🔒</p>
                  <p className="feature-text">Günde 1 kez oynanabilir</p>
                </div>
              </div>

              {/* Testi Başlat butonu üste alındı */}
              <button className="start-button" onClick={startGame}>
                <p className="start-button-text">Testi Başlat</p>
              </button>

              <button className="start-button secondary" onClick={() => { window.location.href = '/'; }} style={{ marginTop: 8 }}>
                <p className="start-button-text">Ana Sayfa</p>
              </button>

              <div className="categories-preview">
                <p className="categories-title">Koz Arif Soruları:</p>
                <div className="categories-grid">
                  <div className="category-badge" style={{ backgroundColor: '#9b59b630' }}>
                    <p className="category-badge-icon">🧠</p>
                    <p className="category-badge-text" style={{ color: '#9b59b6' }}>Koz Arif</p>
                  </div>
                </div>
              </div>

              <p className="note-text">
                ⚡ Bu testi günde sadece 1 kez oynayabilirsin
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="app-wrapper">
        <div className="main-content">
          <div className="container">
            <div className="result-container">
              <img src="/mindle-logo.png" alt="Mindle Logo" className="start-logo" />
              <p className="result-title">🎉 Koz Arif Quiz Tamamlandı! 🎉</p>
              
              <div className="score-card">
                <p className="final-score">{score}/10</p>
                <p className="score-label">Toplam Puan</p>
              </div>

              <div className="stats-container">
                <div className="stat-item">
                  <p className="stat-value">{formatTime(totalTime)}</p>
                  <p className="stat-label">Toplam Süre</p>
                </div>
                <div className="stat-item">
                  <p className="stat-value">{(score / 10 * 100).toFixed(0)}%</p>
                  <p className="stat-label">Başarı Oranı</p>
                </div>
              </div>

              <p className="ranking-info">
                ⚡ Sıralamada: Önce puan, sonra hız dikkate alınır
              </p>

              <Leaderboard 
                dailyEntries={dailyLeaderboard}
                weeklyEntries={weeklyLeaderboard}
                monthlyEntries={monthlyLeaderboard}
                currentUserScore={score} 
                currentUsername={username} 
              />

              <div className="share-buttons-container">
                <button className="share-btn whatsapp" onClick={shareOnWhatsApp}>
                  WhatsApp
                </button>
                <button className="share-btn twitter" onClick={shareOnX}>
                  X
                </button>
                <button className="share-btn instagram" onClick={shareOnInstagram}>
                  Instagram
                </button>
                <button className="share-btn generic" onClick={shareGeneric}>
                  {typeof navigator.share !== 'undefined' ? 'Diğer' : 'Kopyala'}
                </button>
              </div>

              <button className="start-button secondary" onClick={() => { window.location.href = '/'; }} style={{ marginTop: 8 }}>
                <p className="start-button-text">Ana Sayfa</p>
              </button>

              <div className="tomorrow-card">
                <p className="tomorrow-emoji">⏰</p>
                <p className="tomorrow-text">Yeni Koz Arif için</p>
                <p className="tomorrow-time">YARINI BEKLE</p>
                <p className="tomorrow-info">Her gün 10 yeni bilmece ile zihnini test et!</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {localStorage.getItem('mindletr_cookies') === null && (
          <CookieBanner onAccepted={() => {}} />
        )}
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <div className="main-content">
        <div className="container">
          <div className="game-container">
            {/* Oyun sırasında logo kaldırıldı - daha temiz görünüm */}
            <div className="header">
              <div className="score-container">
                <p className="score-text">Puan: {score}</p>
              </div>
              <div className="timer-container">
                <p className="timer-text">⏱️ {timeLeft}s</p>
              </div>
              <div className="total-time-container">
                <p className="total-time-text">🕒 {formatTime(totalTime)}</p>
              </div>
            </div>

            <div className="progress-section">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <p className="progress-text">
                Soru {currentQuestion + 1}/{dailyQuestions.length}
              </p>
            </div>

            {dailyQuestions.length > 0 && currentQuestion < dailyQuestions.length && (
              <>
                <div className="category-container">
                  <div className="category-badge" style={{ backgroundColor: getCategoryColor(dailyQuestions[currentQuestion].category) + '30' }}>
                    <p className="category" style={{ color: getCategoryColor(dailyQuestions[currentQuestion].category), margin: 0 }}>
                      {dailyQuestions[currentQuestion].category}
                    </p>
                  </div>
                </div>

                <div className="question-card">
                  <p className="question-text">
                    {dailyQuestions[currentQuestion].question}
                  </p>
                </div>

                <div className="options-container">
                  {dailyQuestions[currentQuestion].options.map((option: string, index: number) => (
                    <button
                      key={index}
                      className="option-button"
                      style={{
                        ...(selectedAnswer !== null && 
                          index === dailyQuestions[currentQuestion].correct && 
                          { backgroundColor: '#2ecc71' }),
                        ...(selectedAnswer !== null && 
                          index === selectedAnswer && 
                          index !== dailyQuestions[currentQuestion].correct && 
                          { backgroundColor: '#e74c3c' }),
                      }}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={selectedAnswer !== null}
                    >
                      <p className="option-text">{option}</p>
                      {selectedAnswer !== null && index === dailyQuestions[currentQuestion].correct && (
                        <p className="feedback">✅</p>
                      )}
                      {selectedAnswer !== null && index === selectedAnswer && index !== dailyQuestions[currentQuestion].correct && (
                        <p className="feedback">❌</p>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
      {localStorage.getItem('mindletr_cookies') === null && (
        <CookieBanner onAccepted={() => {}} />
      )}
    </div>
  );
};

export default KozArifQuiz;