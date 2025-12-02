import React, { useEffect, useState, useRef } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import './MapQuiz.css';
import worldData from '../data/world-countries.json';

const MapQuiz: React.FC = () => {
  const [geoData, setGeoData] = useState<any>(worldData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [targets, setTargets] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState<'loading' | 'playing' | 'finished'>('loading');
  
  // Tıklanan ülkelerin durumunu tutar: { "Turkey": "correct", "Germany": "wrong" }
  const [countryStatus, setCountryStatus] = useState<Record<string, 'correct' | 'wrong'>>({});
  
  // Oyun başlatma referansı (Strict Mode double-invoke önlemek için)
  const gameInitialized = useRef(false);

  // 1. Oyunu Başlat (Veri hazır)
  const initGame = (geographies: any[]) => {
    if (gameInitialized.current) return;
    gameInitialized.current = true;

    // İsimleri al ve filtrele
    const allNames = geographies
      .map(g => g.properties.name || g.properties.NAME || g.properties.ADMIN)
      .filter(n => n && n.length > 2 && n !== "Antarctica"); // Antarktika'yı ve hatalı isimleri çıkar

    // Tekrar edenleri temizle
    const uniqueNames = Array.from(new Set(allNames));
    
    // Karıştır ve 20 tane seç
    const shuffled = [...uniqueNames].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);

    setTargets(selected);
    setGameStatus('playing');
  };

  // 3. Ülkeye Tıklama Mantığı
  const handleCountryClick = (geo: any) => {
    if (gameStatus !== 'playing') return;

    const clickedName = geo.properties.name || geo.properties.NAME || geo.properties.ADMIN;
    const targetName = targets[currentIndex];

    if (!clickedName) return;

    // Doğru mu yanlış mı?
    const isCorrect = clickedName === targetName;

    // Durumu güncelle (Renk değişimi için)
    setCountryStatus(prev => ({
      ...prev,
      [clickedName]: isCorrect ? 'correct' : 'wrong'
    }));

    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      // Yanlış bilindiyse, doğru olanı da kullanıcıya göstermek isteyebiliriz
      // İsteğe bağlı: Doğru cevabı da yeşil yakabiliriz
      setCountryStatus(prev => ({
        ...prev,
        [targetName]: 'correct' // Doğru cevabı da göster
      }));
    }

    // Kısa bir süre bekle ve sonraki soruya geç
    setTimeout(() => {
      // Renkleri temizle (veya kalıcı olmasını istiyorsanız bu satırı kaldırın)
      setCountryStatus({}); 
      
      if (currentIndex + 1 >= targets.length) {
        setGameStatus('finished');
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }, 1000); // 1 saniye bekle
  };

  const restartGame = () => {
    window.location.reload();
  };

  // --- Render ---

  if (loading) return <div className="map-quiz-loading">Harita Yükleniyor...</div>;
  if (error) return <div className="map-quiz-error">{error} <button onClick={restartGame}>Tekrar Dene</button></div>;

  return (
    <div className="map-quiz-container">
      {/* Üst Bilgi Paneli */}
      <div className="quiz-header">
        <div className="header-left">
          <button className="back-btn" onClick={() => window.location.href = '/'}>← Ana Sayfa</button>
        </div>
        <div className="header-center">
          <h2>Harita Oyunu</h2>
        </div>
        <div className="header-right">
          <div className="score-badge">Puan: {score} / {targets.length}</div>
        </div>
      </div>

      {/* Oyun Alanı */}
      <div className="quiz-content">
        {gameStatus === 'playing' && (
          <div className="question-box">
            <span className="question-label">Bulman Gereken Ülke:</span>
            <h1 className="question-target">{targets[currentIndex]}</h1>
            <div className="question-progress">Soru {currentIndex + 1} / {targets.length}</div>
          </div>
        )}

        {gameStatus === 'finished' && (
          <div className="result-overlay">
            <div className="result-box">
              <h2>Oyun Bitti!</h2>
              <p className="final-score">Toplam Puan: {score}</p>
              <button className="restart-btn" onClick={restartGame}>Yeniden Oyna</button>
              <button className="home-btn" onClick={() => window.location.href = '/'}>Ana Sayfa</button>
            </div>
          </div>
        )}

        <div className="map-wrapper">
          <ComposableMap 
            projectionConfig={{ scale: 140, rotate: [-10, 0, 0] }} 
            width={800} 
            height={450}
            style={{ width: "100%", height: "100%" }}
          >
            <ZoomableGroup minZoom={1} maxZoom={8}>
              <Geographies geography={geoData}>
                {({ geographies }) => {
                  // Harita render edildiğinde oyunu başlat (bir kere)
                  if (gameStatus === 'loading' && geographies.length > 0) {
                    setTimeout(() => initGame(geographies), 0);
                  }

                  return geographies.map((geo) => {
                    const name = geo.properties.name || geo.properties.NAME || geo.properties.ADMIN;
                    const status = countryStatus[name]; // 'correct' | 'wrong' | undefined
                    
                    let fillColor = "#D6D6DA"; // Varsayılan gri
                    if (status === 'correct') fillColor = "#2ecc71"; // Yeşil
                    if (status === 'wrong') fillColor = "#e74c3c";   // Kırmızı

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onClick={() => handleCountryClick(geo)}
                        style={{
                          default: {
                            fill: fillColor,
                            stroke: "#000000",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                          hover: {
                            fill: status ? fillColor : "#F53", // Tıklanmadıysa hover rengi
                            stroke: "#000000",
                            strokeWidth: 0.75,
                            outline: "none",
                            cursor: "pointer"
                          },
                          pressed: {
                            fill: status ? fillColor : "#E42",
                            stroke: "#000000",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                        }}
                      />
                    );
                  });
                }}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export default MapQuiz;
