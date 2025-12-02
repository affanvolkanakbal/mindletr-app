import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './MapQuiz.css';

// Use a reliable TopoJSON source that includes country names in properties
const GEO_URL = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const shuffle = (arr: any[]) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const getNameFromGeo = (g: any) => g.properties.name || g.properties.NAME || g.properties.ADMIN;

const MapQuiz: React.FC = () => {
  const [targets, setTargets] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [totalTime, setTotalTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [highlights, setHighlights] = useState<Record<string, 'correct' | 'wrong'>>({});
  const [finished, setFinished] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Game timer
  useEffect(() => {
    let timer: any;
    if (running && !finished) {
      timer = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            handleTimeout();
            return 20;
          }
          return t - 1;
        });
        setTotalTime(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, finished]);

  const startGame = (geographies: any[]) => {
    if (targets.length > 0) return; // Already started
    
    const allNames = geographies
      .map(g => getNameFromGeo(g))
      .filter(n => n && n.length > 2); // Filter out tiny or empty names
      
    const uniqueNames = Array.from(new Set(allNames));
    const selectedTargets = shuffle(uniqueNames).slice(0, 20);
    
    setTargets(selectedTargets);
    setRunning(true);
    setMapLoaded(true);
  };

  const handleTimeout = () => {
    const cur = targets[index];
    setHighlights(h => ({ ...h, [cur]: 'wrong' }));
    
    setTimeout(() => {
      setHighlights(h => {
        const copy = { ...h };
        delete copy[cur];
        return copy;
      });
      nextQuestion();
    }, 700);
  };

  const handleClickGeo = (geo: any) => {
    if (!running || finished) return;
    
    const name = getNameFromGeo(geo);
    const targetName = targets[index];
    
    if (!name) return;

    const correct = name === targetName;
    setHighlights(h => ({ ...h, [name]: correct ? 'correct' : 'wrong' }));
    
    if (correct) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      setHighlights(h => {
        const copy = { ...h };
        delete copy[name];
        return copy;
      });
      nextQuestion();
    }, 700);
  };

  const nextQuestion = () => {
    if (index + 1 >= targets.length) {
      setFinished(true);
      setRunning(false);
    } else {
      setIndex(i => i + 1);
      setTimeLeft(20);
    }
  };

  const resetGame = () => {
    window.location.reload(); // Simple reload to restart cleanly
  };

  return (
    <div className="map-quiz-wrapper">
      <div className="map-quiz-header">
        <h2>Dünya Haritası - Ülke Tahmin Oyunu</h2>
        <div className="map-quiz-stats">
          <div>Puan: {score}/{targets.length}</div>
          <div>Süre: {timeLeft}s</div>
          <div>Toplam: {totalTime}s</div>
          <div>Soru: {targets.length > 0 ? index + 1 : 0}/{targets.length || 20}</div>
        </div>
      </div>

      <div className="map-quiz-content">
        <div className="target-box">
          {mapLoaded ? (
            <>
              <p className="target-label">Hedef Ülke:</p>
              <p className="target-name">{targets[index]}</p>
            </>
          ) : (
            <p>Harita yükleniyor...</p>
          )}
        </div>

        <div className="map-container">
          <ComposableMap projectionConfig={{ scale: 140 }} width={980} height={500}>
            <Geographies geography={GEO_URL}>
              {({ geographies }) => {
                // Initialize game once map data is ready
                if (!mapLoaded && geographies && geographies.length > 0) {
                  setTimeout(() => startGame(geographies), 0);
                }

                return geographies.map((geo) => {
                  const name = getNameFromGeo(geo);
                  const highlight = highlights[name];
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => handleClickGeo(geo)}
                      style={{
                        default: {
                          fill: highlight === 'correct' ? '#2ecc71' : highlight === 'wrong' ? '#e74c3c' : '#f4e9c1',
                          stroke: '#000',
                          strokeWidth: 0.5,
                          outline: 'none'
                        },
                        hover: {
                          fill: '#f0d36a',
                          stroke: '#000',
                          strokeWidth: 0.5,
                          outline: 'none'
                        },
                        pressed: {
                          fill: '#f0d36a',
                          outline: 'none'
                        }
                      }}
                    />
                  );
                });
              }}
            </Geographies>
          </ComposableMap>
        </div>
      </div>

      {finished && (
        <div className="map-quiz-result">
          <div className="result-card">
            <h3>Oyun Bitti</h3>
            <p>Puan: {score}/{targets.length}</p>
            <p>Toplam süre: {totalTime}s</p>
            <div className="result-actions">
              <button onClick={resetGame}>Yeniden Oyna</button>
              <button onClick={() => { window.location.href = '/'; }}>Ana Sayfaya Dön</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapQuiz;
