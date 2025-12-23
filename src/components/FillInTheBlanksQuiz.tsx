import React, { useState, useEffect } from 'react';
import '../App.css'; // Reusing main styles
import Footer from './Footer';
import { FILL_IN_THE_BLANKS_QUESTIONS, FillInTheBlankQuestion } from '../data/fillInTheBlanksQuestions';
import { getTodayString } from '../utils/dailyQuestions';

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"],
  ["Z", "X", "C", "V", "B", "N", "M", "Ö", "Ç"],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
];

// Deterministik rastgele sayı üreteci (App.tsx'ten alındı)
const seededRandom = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 32-bit integer'a dönüştür
  }
  return Math.abs(hash % 10000) / 10000;
};

const FillInTheBlanksQuiz = () => {
  const [gameStatus, setGameStatus] = useState<'menu' | 'playing' | 'finished'>('menu');
  const [questions, setQuestions] = useState<FillInTheBlankQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'wrong'>('none');
  const [timeLeft, setTimeLeft] = useState(150); // 2:30 dakika (150 saniye) toplam süre
  const [results, setResults] = useState<('correct' | 'wrong' | 'passed')[]>([]);
  const [questionStatus, setQuestionStatus] = useState<('unanswered' | 'correct' | 'wrong' | 'passed')[]>([]);

  useEffect(() => {
    if (gameStatus === 'playing') {
      if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        // Toplam süre doldu
        setGameStatus('finished');
      }
    }
  }, [timeLeft, gameStatus]);

  const startGame = () => {
    // 1. Tüm soruları al
    const allQuestions = [...FILL_IN_THE_BLANKS_QUESTIONS];
    
    // 2. Günlük Seed ile karıştır
    const today = getTodayString();
    const seed = today; // Sadece tarih yeterli
    
    // Fisher-Yates shuffle with seeded random
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(seed + i.toString()) * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    
    // 3. İlk 10 soruyu seç
    const dailySelection = allQuestions.slice(0, 10);
    
    setQuestions(dailySelection);
    setCurrentQuestionIndex(0);
    setScore(0);
    setResults([]);
    setQuestionStatus(new Array(10).fill('unanswered'));
    setTimeLeft(150); // 150 saniye (2:30 dakika)
    setGameStatus('playing');
    prepareQuestion(dailySelection[0]);
  };

  const prepareQuestion = (question: FillInTheBlankQuestion) => {
    const answerLength = question.answer.length;
    const initialAnswer = Array(answerLength).fill('');
    const newRevealedIndices: number[] = [];

    // Logic for revealing letters
    if (question.difficulty === 'hard') {
      const randomIndex = Math.floor(Math.random() * answerLength);
      initialAnswer[randomIndex] = question.answer[randomIndex];
      newRevealedIndices.push(randomIndex);
    }

    setUserAnswer(initialAnswer);
    setRevealedIndices(newRevealedIndices);
    setFeedback('none');
    // Timer resetlenmiyor, global süre işliyor
  };

  const handleKeyPress = (char: string) => {
    if (feedback !== 'none') return;

    // Find first empty slot
    const firstEmptyIndex = userAnswer.findIndex(char => char === '');
    if (firstEmptyIndex !== -1) {
      const newAnswer = [...userAnswer];
      newAnswer[firstEmptyIndex] = char;
      setUserAnswer(newAnswer);
    }
  };

  const handleBackspace = () => {
    if (feedback !== 'none') return;

    // Find last filled slot that is NOT revealed
    // We iterate backwards
    for (let i = userAnswer.length - 1; i >= 0; i--) {
      if (userAnswer[i] !== '' && !revealedIndices.includes(i)) {
        const newAnswer = [...userAnswer];
        newAnswer[i] = '';
        setUserAnswer(newAnswer);
        return;
      }
    }
  };

  const checkAnswer = (finalAnswer: string[]) => {
    const currentQ = questions[currentQuestionIndex];
    const answerString = finalAnswer.join('');
    
    const newStatus = [...questionStatus];

    if (answerString === currentQ.answer) {
      setFeedback('correct');
      setScore(s => s + 10);
      newStatus[currentQuestionIndex] = 'correct';
      setQuestionStatus(newStatus);
      
      setTimeout(() => {
        findNextQuestion(newStatus);
      }, 1500);
    } else {
      setFeedback('wrong');
      newStatus[currentQuestionIndex] = 'wrong';
      setQuestionStatus(newStatus);
      
      setTimeout(() => {
        findNextQuestion(newStatus);
      }, 1000);
    }
  };

  const handlePass = () => {
    const newStatus = [...questionStatus];
    newStatus[currentQuestionIndex] = 'passed';
    setQuestionStatus(newStatus);
    findNextQuestion(newStatus);
  };

  const findNextQuestion = (currentStatus: ('unanswered' | 'correct' | 'wrong' | 'passed')[]) => {
    // Mevcut indeksten başlayarak bir sonraki 'unanswered' veya 'passed' soruyu bul
    let nextIndex = -1;
    
    // 1. Önce sıradaki 'unanswered' sorulara bak
    for (let i = 1; i < questions.length; i++) {
      const checkIndex = (currentQuestionIndex + i) % questions.length;
      if (currentStatus[checkIndex] === 'unanswered') {
        nextIndex = checkIndex;
        break;
      }
    }

    // 2. Eğer 'unanswered' kalmadıysa, 'passed' sorulara bak
    if (nextIndex === -1) {
      for (let i = 1; i < questions.length; i++) {
        const checkIndex = (currentQuestionIndex + i) % questions.length;
        if (currentStatus[checkIndex] === 'passed') {
          nextIndex = checkIndex;
          break;
        }
      }
    }

    // 3. Eğer o da yoksa ve mevcut soru da tamamlandıysa oyun bitti
    // (Mevcut soru 'passed' ise ve başka soru yoksa kendisine döner, bu durumda oyun bitmez, tekrar sorulur)
    if (nextIndex !== -1) {
      setCurrentQuestionIndex(nextIndex);
      prepareQuestion(questions[nextIndex]);
    } else {
      // Kontrol: Eğer şu anki soru da 'correct' veya 'wrong' ise oyun bitmiştir.
      // Eğer şu anki soru 'passed' ise ve başka soru yoksa, kullanıcı bu soruyu çözmek zorundadır.
      if (currentStatus[currentQuestionIndex] === 'correct' || currentStatus[currentQuestionIndex] === 'wrong') {
        setGameStatus('finished');
      } else {
        // Sadece tek bir soru kaldı ve o da 'passed' durumunda, tekrar soruyoruz (zaten ekranda)
        // Ancak prepareQuestion çağırarak inputları sıfırlamamız lazım
        prepareQuestion(questions[currentQuestionIndex]);
      }
    }
  };

  const getShareMessage = () => {
    const emojis = questionStatus.map(s => s === 'correct' ? '🟩' : (s === 'wrong' ? '🟥' : '⬜')).join('');
    const today = new Date().toLocaleDateString('tr-TR');
    return `✍️ Mindle - Sen Tamamla (${today})\n\n${emojis}\n\nPuan: ${score}\n\nSen de oyna: https://mindle-tr.com`;
  };

  const handleShare = async () => {
    const message = getShareMessage();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mindle - Sen Tamamla Skorum',
          text: message,
        });
      } catch (err) {
        console.log('Share failed', err);
      }
    } else {
      navigator.clipboard.writeText(message);
      alert('Skor kopyalandı!');
    }
  };

  if (gameStatus === 'menu') {
    return (
      <div className="app-wrapper">
        <div className="main-content">
          <div className="container">
            <div className="start-container">
              <p className="start-title">✍️ Sen Tamamla</p>
              <p className="start-subtitle">Boşlukları doldur, kelimeyi bul!</p>
              
              <div className="features-list">
                <div className="feature-item">
                  <p className="feature-icon">🧠</p>
                  <p className="feature-text">Her gün 10 yeni soru</p>
                </div>
                <div className="feature-item">
                  <p className="feature-icon">⏱️</p>
                  <p className="feature-text">Toplam 2:30 dakika süre</p>
                </div>
                <div className="feature-item">
                  <p className="feature-icon">💡</p>
                  <p className="feature-text">Zor sorularda ipucu harf!</p>
                </div>
              </div>

              <button className="start-button" style={{backgroundColor: '#2ecc71', marginTop: 20}} onClick={startGame}>
                <p className="start-button-text">Oyunu Başlat</p>
              </button>

              <button className="start-button secondary" onClick={() => window.location.href = '/'} style={{marginTop: 10}}>
                <p className="start-button-text">Ana Sayfaya Dön</p>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (gameStatus === 'finished') {
    return (
      <div className="app-wrapper">
        <div className="main-content">
          <div className="container">
            <div className="result-container">
              <p className="result-title">🎉 Oyun Bitti! 🎉</p>
              <div className="score-card">
                <p className="final-score">{score}</p>
                <p className="score-label">Puan</p>
              </div>
              
              <button className="start-button" style={{backgroundColor: '#3498db', marginBottom: 10}} onClick={handleShare}>
                <p className="start-button-text">Skoru Paylaş 📤</p>
              </button>

              <button className="start-button" onClick={() => setGameStatus('menu')}>
                <p className="start-button-text">Tekrar Oyna</p>
              </button>
              <button className="start-button secondary" onClick={() => window.location.href = '/'} style={{marginTop: 10}}>
                <p className="start-button-text">Ana Sayfaya Dön</p>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];

  return (
    <div className="app-wrapper">
      <div className="main-content">
        <div className="container">
          <div className="game-container">
            <div className="header">
                <div className="score-container">
                  <p className="score-text">Puan: {score}</p>
                </div>
                <div className="timer-container">
                  <p className="timer-text">⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
                </div>
                <div className="timer-container">
                  <p className="timer-text">{currentQuestionIndex + 1} / {questions.length}</p>
                </div>
            </div>

            <div className="question-card">
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 'bold',
                marginBottom: '10px',
                backgroundColor: currentQ.difficulty === 'easy' ? '#2ecc71' : (currentQ.difficulty === 'medium' ? '#f1c40f' : '#e74c3c'),
                color: 'white'
              }}>
                {currentQ.difficulty === 'easy' ? 'KOLAY' : (currentQ.difficulty === 'medium' ? 'ORTA' : 'ZOR')}
              </div>
              <p className="question-text">{currentQ.question}</p>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '8px', 
              marginBottom: '30px',
              flexWrap: 'wrap' 
            }}>
              {userAnswer.map((char, index) => (
                <div key={index} style={{
                  width: '40px',
                  height: '50px',
                  borderBottom: '4px solid white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: feedback === 'correct' ? '#2ecc71' : (feedback === 'wrong' ? '#e74c3c' : 'white'),
                  backgroundColor: revealedIndices.includes(index) ? 'rgba(255,255,255,0.1)' : 'transparent'
                }}>
                  {char}
                </div>
              ))}
            </div>

            {/* Keyboard */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              maxWidth: '100%'
            }}>
              {KEYBOARD_ROWS.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                  {row.map((char) => (
                    <button
                      key={char}
                      onClick={() => handleKeyPress(char)}
                      style={{
                        width: '32px',
                        height: '42px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      {char}
                    </button>
                  ))}
                </div>
              ))}
              
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  onClick={handlePass}
                  style={{
                    width: '80px',
                    height: '45px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#f1c40f',
                    color: '#2c3e50',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  PAS
                </button>

                <button
                  onClick={handleBackspace}
                  style={{
                    width: '80px',
                    height: '45px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  SİL ⌫
                </button>

                <button
                  onClick={() => checkAnswer(userAnswer)}
                  disabled={userAnswer.includes('')}
                  style={{
                    width: '120px',
                    height: '45px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: userAnswer.includes('') ? '#95a5a6' : '#2ecc71',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: userAnswer.includes('') ? 'not-allowed' : 'pointer'
                  }}
                >
                  TAMAM ✓
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FillInTheBlanksQuiz;
