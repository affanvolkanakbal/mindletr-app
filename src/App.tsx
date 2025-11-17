import React, { useEffect, useState } from 'react';
import './App.css';
import { CATEGORIES } from './data/categories';
import { getDailyQuestions, getTodayString } from './utils/dailyQuestions';

const App = () => {
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

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = async () => {
    try {
      setLoading(true);
      
      const today = getTodayString();
      const playedDate = localStorage.getItem('lastPlayedDate');
      
      console.log('📅 Bugün:', today);
      console.log('🎮 Son oynama:', playedDate);
      
      if (playedDate === today) {
        console.log('⏳ Bugünkü quiz zaten oynanmış');
        setAlreadyPlayed(true);
        setShowStartScreen(false);
      } else {
        console.log('🎮 Yeni oyun başlatılıyor...');
        const questions = getDailyQuestions();
        
        console.log('📊 Çekilen soru sayısı:', questions.length);
        
        setDailyQuestions(questions);
        setShowStartScreen(true);
        setAlreadyPlayed(false);
      }
    } catch (error) {
      console.log('❌ Storage error:', error);
      alert('Hata: Oyun başlatılamadı');
      const fallbackQuestions = getDailyQuestions();
      setDailyQuestions(fallbackQuestions);
      setShowStartScreen(true);
      setAlreadyPlayed(false);
    } finally {
      setLoading(false);
      console.log('✅ Oyun başlatma tamamlandı');
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
      handleNextQuestion();
    }
  }, [timeLeft, gameOver, gameStarted]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const totalTimer = setInterval(() => {
        setTotalTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => clearInterval(totalTimer);
    }
  }, [gameOver, gameStarted]);

  const handleAnswer = (selectedIndex: number) => {
    if (selectedAnswer !== null || !gameStarted) return;
    
    setSelectedAnswer(selectedIndex);
    
    if (selectedIndex === dailyQuestions[currentQuestion].correct) {
      setScore(score + 10);
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = async () => {
    setSelectedAnswer(null);
    
    if (currentQuestion < dailyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      setGameOver(true);
      setGameStarted(false);
      
      try {
        const today = getTodayString();
        localStorage.setItem('lastPlayedDate', today);
        localStorage.setItem('lastScore', score.toString());
        localStorage.setItem('lastTime', totalTime.toString());
      } catch (error) {
        console.log('Storage error:', error);
      }
    }
  };

  const shareScore = async () => {
    try {
      const scoreToShare = score.toString();
      const timeToShare = totalTime.toString();
      const today = new Date().toLocaleString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      
      const shareMessage = `🎯 ${today} tarihinde Günlük Genel Kültür Quiz'inden ${scoreToShare}/100 puan aldım! ⏱️ Süre: ${formatTime(parseInt(timeToShare))}\n\nHer gün 10 yeni soru ile bilgini test et! https://mindle-tr.com #GenelKultur #MindletrChallenge`;
      
      if (navigator.share) {
        await navigator.share({
          title: 'Günlük Quiz Skorum',
          text: shareMessage,
        });
      } else {
        navigator.clipboard.writeText(shareMessage);
        alert('Skor kopyalandı!');
      }
    } catch (error) {
      alert('Paylaşım hatası: Skor paylaşılamadı');
    }
  };

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

  const renderMainContent = () => {
    if (loading) {
      return (
        <div className="loading-container">
          <p className="loading-text">📚</p>
          <p className="loading-title">Günlük Quiz Hazırlanıyor...</p>
          <p className="loading-subtitle">10 farklı kategoriden sorular getiriliyor</p>
        </div>
      );
    }

    if (alreadyPlayed) {
      return (
        <div className="already-played-container">
          <img src="/mindle-logo.png" alt="Mindle Logo" className="start-logo" />
          <p className="already-played-title">🎉 Bugünkü Quiz'i Tamamladın! 🎉</p>
          
          <div className="tomorrow-card">
            <p className="tomorrow-emoji">⏰</p>
            <p className="tomorrow-text">Yeni quiz için</p>
            <p className="tomorrow-time">YARINI BEKLE</p>
            <p className="tomorrow-info">Her gün 10 yeni soru ile bilgilerini test et!</p>
          </div>

          <button className="share-button" onClick={shareScore}>
            <p className="share-button-text">Skorumu Paylaş</p>
          </button>

          <div className="categories-preview">
            <p className="categories-title">Yarının Kategorileri:</p>
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
        </div>
      );
    }

    if (showStartScreen) {
      return (
        <div className="start-container">
          <img src="/mindle-logo.png" alt="Mindle Logo" className="start-logo" />
          
          <p className="start-title">🎯 Günlük Quiz</p>
          <p className="start-subtitle">10 Soruda Bilgini Test Et!</p>
          
          <div className="features-list">
            <div className="feature-item">
              <p className="feature-icon">⏱️</p>
              <p className="feature-text">30 saniye cevaplama süresi</p>
            </div>
            <div className="feature-item">
              <p className="feature-icon">🏆</p>
              <p className="feature-text">Günlük sıralama</p>
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

          <button className="start-button" onClick={startGame}>
            <p className="start-button-text">Testi Başlat</p>
          </button>

          <p className="note-text">
            ⚡ Bu testi günde sadece 1 kez oynayabilirsin
          </p>
        </div>
      );
    }

    if (gameOver) {
      return (
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

          <button className="share-button" onClick={shareScore}>
            <p className="share-button-text">Skorumu Paylaş</p>
          </button>

          <p className="tomorrow-info">
            🗓️ Yeni quiz yarın hazır!
          </p>
        </div>
      );
    }

    const progress = dailyQuestions.length > 0 ? ((currentQuestion + 1) / dailyQuestions.length) * 100 : 0;

    return (
      <div className="game-container">
        <img src="/mindle-logo.png" alt="Mindle Logo" className="start-logo" />
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
                <p className="category-badge-icon">
                  {getCategoryIcon(dailyQuestions[currentQuestion].category)}
                </p>
                <p className="category" style={{ color: getCategoryColor(dailyQuestions[currentQuestion].category) }}>
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
    );
  };

  return (
    <div className="app">
      <div className="main-content">
        {renderMainContent()}
      </div>
      
      {/* Tüm sayfalarda görünecek footer */}
      <footer className="site-footer">
        <div>
          <a href="/legal/privacy-policy.html" target="_blank" rel="noopener noreferrer">
            Gizlilik Politikası
          </a>
          <span className="footer-separator"> • </span>
          <a href="/legal/terms-of-service.html" target="_blank" rel="noopener noreferrer">
            Kullanım Şartları
          </a>
          <span className="footer-separator"> • </span>
          <a href="/legal/cookie-policy.html" target="_blank" rel="noopener noreferrer">
            Çerez Politikası
          </a>
        </div>
        <div className="copyright">
          © 2025 Mindle TR – Türkiye'nin Günlük Bilgi Yarışması
        </div>
      </footer>
    </div>
  );
};

export default App;