import React, { useEffect, useState } from 'react';
import './App.css';
import { CATEGORIES } from './data/categories';
import { getDailyQuestions, getTodayString } from './utils/dailyQuestions';
import CookieBanner from './components/CookieBanner';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import { getOrCreateUsername } from './utils/usernameGenerator';
import { db, auth } from './firebase';
import { signInAnonymously } from 'firebase/auth';
import { ref, set, get, onValue } from 'firebase/database';
import { getWeekIdFromDateStr, getMonthIdFromDateStr } from './utils/dateHelpers';


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

// Günlük soruları getiren geliştirilmiş fonksiyon
const getDailyQuestionsImproved = () => {
  const today = getTodayString();
  const baseQuestions = getDailyQuestions();
  
  // Eğer baseQuestions zaten günlük seed ile çalışıyorsa direkt dön
  // Değilse, kendi seed'imizle karıştır
  if (baseQuestions.length <= 10) {
    return baseQuestions;
  }
  
  // Seed ile karıştırma (Fisher-Yates shuffle)
  const questions = [...baseQuestions];
  const seed = today; // Günlük seed
  
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i.toString()) * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  
  // İlk 10 soruyu al ve her kategoriden en az bir soru olduğundan emin ol
  const selectedQuestions = questions.slice(0, 10);
  
  // Kategori çeşitliliğini kontrol et
  const categoriesInSelection = new Set(selectedQuestions.map(q => q.category));
  const allCategories = new Set(Object.values(CATEGORIES).map(cat => cat.name));
  
  // Eğer tüm kategoriler temsil edilmiyorsa, eksik kategorilerden soru ekle
  if (categoriesInSelection.size < allCategories.size) {
    // Set'i Array'e dönüştürürken Array.from() kullan
    const missingCategories = Array.from(allCategories).filter(cat => !categoriesInSelection.has(cat));
    
    missingCategories.forEach(missingCat => {
      const categoryQuestion = questions.find(q => q.category === missingCat);
      if (categoryQuestion && !selectedQuestions.includes(categoryQuestion)) {
        // Son soruyu çıkar ve yerine bu kategoriyi ekle
        selectedQuestions[9] = categoryQuestion;
      }
    });
  }
  
  return selectedQuestions;
};

const App = () => {
  useEffect(() => {
    signInAnonymously(auth)
    .then(() => console.log('Anonim giriş başarılı'))
    .catch((error: any) => console.log('Giriş hatası:', error));
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
  // const [lastTime, setLastTime] = useState<number>(0); // Unused variable removed
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [username, setUsername] = useState<string>('');
  const [dailyLeaderboard, setDailyLeaderboard] = useState<any[]>([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState<any[]>([]);
  const [monthlyLeaderboard, setMonthlyLeaderboard] = useState<any[]>([]);


  useEffect(() => {
    initializeGame();
    setUsername(getOrCreateUsername());

    // Firebase Leaderboard Listeners
    const dateObj = new Date();
    const dateKey = dateObj.toISOString().split('T')[0];
    const weekId = getWeekIdFromDateStr(dateKey);
    const monthId = getMonthIdFromDateStr(dateKey);

    const dailyRef = ref(db, `daily_scores/${dateKey}`);
    const weeklyRef = ref(db, `weekly_scores/${weekId}`);
    const monthlyRef = ref(db, `monthly_scores/${monthId}`);

    const handleSnapshot = (snapshot: any, setList: any) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const list = Object.values(data);
        setList(list);
      } else {
        setList([]);
      }
    };

    const unsubDaily = onValue(dailyRef, (snap: any) => handleSnapshot(snap, setDailyLeaderboard));
    const unsubWeekly = onValue(weeklyRef, (snap: any) => handleSnapshot(snap, setWeeklyLeaderboard));
    const unsubMonthly = onValue(monthlyRef, (snap: any) => handleSnapshot(snap, setMonthlyLeaderboard));

    return () => {
      unsubDaily();
      unsubWeekly();
      unsubMonthly();
    };
  }, []);

  const initializeGame = async () => {
    try {
      setLoading(true);
      
      const today = getTodayString();
      const playedDate = localStorage.getItem('lastPlayedDate');
      
      console.log('📅 Bugün:', today);
      console.log('🎮 Son oynama:', playedDate);
      
      // Soruları her zaman yükle (Paylaşım özelliği için gerekli)
      const questions = getDailyQuestionsImproved();
      setDailyQuestions(questions);

      if (playedDate === today) {
        console.log('⏳ Bugünkü quiz zaten oynanmış');
        setAlreadyPlayed(true);
        setShowStartScreen(false);
      } else {
        console.log('🎮 Yeni oyun başlatılıyor...');
        
        console.log('📊 Çekilen soru sayısı:', questions.length);
        console.log('🎯 Kategori dağılımı:', questions.map(q => q.category));
        
        setShowStartScreen(true);
        setAlreadyPlayed(false);
      }
    } catch (error) {
      console.log('❌ Storage error:', error);
      alert('Hata: Oyun başlatılamadı');
      const fallbackQuestions = getDailyQuestionsImproved(); // Güncellenmiş fonksiyon
      setDailyQuestions(fallbackQuestions);
      setShowStartScreen(true);
      setAlreadyPlayed(false);
    } finally {
      setLoading(false);
      console.log('✅ Oyun başlatma tamamlandı');
    }
    const savedScore = localStorage.getItem('lastScore');
    // const savedTime = localStorage.getItem('lastTime'); // Unused variable removed
    const savedAnswers = localStorage.getItem('selectedAnswers');
    const savedDate = localStorage.getItem('lastPlayedDate');

    if (savedScore && savedDate === getTodayString()) {
      setLastScore(parseInt(savedScore));
      // setLastTime(parseInt(savedTime)); // Unused variable removed
      if (savedAnswers) {
        setSelectedAnswers(JSON.parse(savedAnswers));
      }
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setShowStartScreen(false);
    setStartTime(Date.now());
    setTimeLeft(30);
    setScore(0);
    setCurrentQuestion(0);
    setGameOver(false);
    setSelectedAnswer(null);
    setTotalTime(0);
  };

  useEffect(() => {
    if (gameStarted && !gameOver && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameStarted) {
      // handleNextQuestion is now called inside the effect, but we need to be careful about dependencies.
      // Since handleNextQuestion changes on every render if not memoized, we should use a ref or memoize it.
      // However, for simplicity and to fix the warning, we can disable the warning for this line 
      // or better, move the logic here if possible.
      // But handleNextQuestion is complex. Let's suppress the warning for now as it's a common pattern in simple apps.
      handleNextQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, gameOver, gameStarted]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const totalTimer = setInterval(() => {
        setTotalTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => clearInterval(totalTimer);
    }
  }, [gameOver, gameStarted, startTime]);

  const handleAnswer = (selectedIndex: number) => {
    if (selectedAnswer !== null || !gameStarted) return;
    
    setSelectedAnswer(selectedIndex);
    setSelectedAnswers(prev => [...prev, selectedIndex]);
    
    const isCorrect = selectedIndex === dailyQuestions[currentQuestion].correct;
    let newScore = score;
    if (isCorrect) {
      newScore = score + 10;
      setScore(prevScore => prevScore + 10);
    }

    setTimeout(() => {
      handleNextQuestion(newScore);
    }, 1000);
  };

  const handleNextQuestion = async (currentScore?: number) => {
    setSelectedAnswer(null);
    const finalScore = currentScore !== undefined ? currentScore : score;
    
    if (currentQuestion < dailyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      setGameOver(true);
      setGameStarted(false);
      
      try {
        const today = getTodayString();
        localStorage.setItem('lastPlayedDate', today);
        localStorage.setItem('lastScore', finalScore.toString());
        localStorage.setItem('lastTime', totalTime.toString());
        localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
        
        // Geçmişi güncelle
        const historyStr = localStorage.getItem('mindle_user_history');
        const history: { date: string, score: number }[] = historyStr ? JSON.parse(historyStr) : [];
        
        // Bugünün tarihi (YYYY-MM-DD formatında)
        const todayISO = new Date().toISOString().split('T')[0];
        
        // Eğer bugün için kayıt varsa güncelle, yoksa ekle
        const existingIndex = history.findIndex(h => h.date === todayISO);
        if (existingIndex >= 0) {
          history[existingIndex].score = finalScore;
        } else {
          history.push({ date: todayISO, score: finalScore });
        }
        
        localStorage.setItem('mindle_user_history', JSON.stringify(history));

        setLastScore(finalScore);
        
        // Firebase'e kaydet
        if (auth.currentUser) {
          const uid = auth.currentUser.uid;
          const dateObj = new Date();
          const dateKey = dateObj.toISOString().split('T')[0];
          const weekId = getWeekIdFromDateStr(dateKey);
          const monthId = getMonthIdFromDateStr(dateKey);

          // Günlük Skor Kaydı
          set(ref(db, `daily_scores/${dateKey}/${uid}`), {
            username,
            score: finalScore,
            time: totalTime,
            timestamp: Date.now()
          });

          // Haftalık Skor Güncelleme
          const weeklyRef = ref(db, `weekly_scores/${weekId}/${uid}`);
          get(weeklyRef).then((snap: any) => {
            const current = snap.val() || { score: 0, time: 0 };
            set(weeklyRef, {
              username,
              score: current.score + finalScore,
              time: current.time + totalTime
            });
          });

          // Aylık Skor Güncelleme
          const monthlyRef = ref(db, `monthly_scores/${monthId}/${uid}`);
          get(monthlyRef).then((snap: any) => {
            const current = snap.val() || { score: 0, time: 0 };
            set(monthlyRef, {
              username,
              score: current.score + finalScore,
              time: current.time + totalTime
            });
          });
        }
      } catch (error) {
        console.log('Storage error:', error);
      }
    }
  };


  // Eski parametresiz paylaşım fonksiyonları ve mesajı
  const getShareMessage = () => {
    const emojis = selectedAnswers
      .map((answer, index) =>
        answer === dailyQuestions[index]?.correct ? '🟩' : '🟥'
      )
      .join('');

    const today = new Date().toLocaleString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    return `🎯 ${today} tarihinde Günlük Genel Kültür Quiz'inden ${score}/100 puan aldım! \n${emojis}\n⏱️ Süre: ${formatTime(totalTime)}\n\nHer gün 10 yeni soru ile bilgini test et! https://mindle-tr.com #GenelKultur #MindletrChallenge`;
  };

  const shareOnWhatsApp = () => {
    const message = getShareMessage();
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareOnX = () => {
    const message = getShareMessage();
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareOnInstagram = () => {
    const message = getShareMessage();
    navigator.clipboard.writeText(message);
    alert('Skor kopyalandı! Instagram hikayende paylaşabilirsin.');
    window.open('https://instagram.com', '_blank');
  };

  const shareGeneric = async () => {
    const message = getShareMessage();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Günlük mindle-tr Skorum',
          text: message,
        });
      } catch (err) {
        console.log('Share failed', err);
      }
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
    const category = Object.values(CATEGORIES).find(cat => cat.name === categoryName);
    return category?.color || '#3498db';
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = Object.values(CATEGORIES).find(cat => cat.name === categoryName);
    return category?.icon || '📚';
  };

  if (loading) {
    return (
      <div className="app-wrapper">
        <div className="main-content">
          <div className="container">
            <div className="loading-container">
              <p className="loading-text">📚</p>
              <p className="loading-title">Günlük Quiz Hazırlanıyor...</p>
              <p className="loading-subtitle">10 farklı kategoriden sorular getiriliyor</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (alreadyPlayed) {
    return (
      <div className="app-wrapper">
        <div className="main-content">
          <div className="container">
            <div className="result-container">
              <img src="/mindle-logo.png" alt="Mindle Logo" className="start-logo" />
              <p className="result-title">🎉 Bugünkü Quiz'i Tamamladın! 🎉</p>
              
              <div className="score-card">
                <p className="final-score">{lastScore}/100</p>
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

              <div className="tomorrow-card">
                <p className="tomorrow-emoji">⏰</p>
                <p className="tomorrow-text">Yeni quiz için</p>
                <p className="tomorrow-time">YARINI BEKLE</p>
                <p className="tomorrow-info">Her gün 10 yeni soru ile bilgilerini test et!</p>
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
            
            <p className="start-title">🎯 Günlük Quiz</p>
            <p className="start-subtitle">10 Soruda Bilgini Test Et!</p>
            
            <div className="features-list">
              <div className="feature-item">
                <p className="feature-icon">⏱️</p>
                <p className="feature-text">30 saniye cevaplama süresi</p>
              </div>
              <div className="feature-item">
                <p className="feature-icon">📚</p>
                <p className="feature-text">10 farklı kategori</p>
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

            <div className="categories-preview">
              <p className="categories-title">Bugünün Kategorileri:</p>
              <div className="categories-grid">
                {Object.values(CATEGORIES).slice(0, 5).map((category, index) => (
                  <div key={index} className="category-badge" style={{ backgroundColor: category.color + '30' }}>
                    <p className="category-badge-icon">{category.icon}</p>
                    <p className="category-badge-text" style={{ color: category.color }}>{category.name}</p>
                  </div>
                ))}
                {Object.values(CATEGORIES).slice(5).map((category, index) => (
                  <div key={index} className="category-badge" style={{ backgroundColor: category.color + '30' }}>
                    <p className="category-badge-icon">{category.icon}</p>
                    <p className="category-badge-text" style={{ color: category.color }}>{category.name}</p>
                  </div>
                ))}
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

  return (
    <div className="app-wrapper">
      <div className="main-content">
        <div className="container">
          {gameOver ? (
            <div className="result-container">
              <img src="/mindle-logo.png" alt="Mindle Logo" className="start-logo" />
              <p className="result-title">🎉 Günlük Quiz Tamamlandı! 🎉</p>
              
              <div className="score-card">
                <p className="final-score">{score}/100</p>
                <p className="score-label">Toplam Puan</p>
              </div>

              <div className="stats-container">
                <div className="stat-item">
                  <p className="stat-value">{formatTime(totalTime)}</p>
                  <p className="stat-label">Toplam Süre</p>
                </div>
                <div className="stat-item">
                  <p className="stat-value">{(score / 100 * 100).toFixed(0)}%</p>
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

              <p className="tomorrow-info">
                🗓️ Yeni quiz yarın hazır!
              </p>
            </div>
          ) : (
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
                        onClick={() => handleAnswer(index)}
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
          )}
        </div>
      </div>
      <Footer />
      {localStorage.getItem('mindletr_cookies') === null && (
        <CookieBanner onAccepted={() => {}} />
      )}
    </div>
  );
};
export default App;