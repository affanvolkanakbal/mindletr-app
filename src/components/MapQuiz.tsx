import React, { useEffect, useMemo, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './MapQuiz.css';

const GEO_URL = 'https://unpkg.com/world-atlas@2.0.2/world/110m.json';

const shuffle = (arr: any[]) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const getNameFromGeo = (g: any) => g.properties.NAME || g.properties.NAME_LONG || g.properties.ADMIN || g.properties.name || g.properties.name_en || g.properties.label;

const MapQuiz: React.FC = () => {
  const [geos, setGeos] = useState<any[]>([]);
  const [targets, setTargets] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [totalTime, setTotalTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [highlights, setHighlights] = useState<Record<string, 'correct' | 'wrong'>>({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // fetch topojson and extract countries
    fetch(GEO_URL)
      .then(res => res.json())
      .then((topo) => {
        // react-simple-maps expects objects.countries or objects.ne_110m_admin_0_countries
        const obj = topo.objects.countries || topo.objects.ne_110m_admin_0_countries || Object.values(topo.objects)[0];
        // parse geometries
        const geographies = (obj && obj.geometries) ? obj.geometries : [];
        // The world-atlas topojson lacks properties in the geometries here when using raw 110m; however react-simple-maps maps them to properties later.
        // We'll store the raw geometries and let Geographies render them.
        setGeos(geographies);
      })
      .catch(err => {
        console.error('Topology fetch error', err);
      });
  }, []);

  // build a list of country names once geos are available
  useEffect(() => {
    if (!geos || geos.length === 0) return;
    // We will rely on the Geographies render step to provide properties; but as fallback, build targets from available properties.
    const names: string[] = [];
    geos.forEach((g: any) => {
      const n = getNameFromGeo(g) || (g.id ? g.id.toString() : null);
      if (n && n.length > 1) names.push(n);
    });

    const uniq = Array.from(new Set(names));
    const pick = shuffle(uniq).slice(0, 20);
    setTargets(pick);
  }, [geos]);

  useEffect(() => {
    let timer: any;
    if (running && !finished) {
      timer = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            // timeout -> mark wrong and move on
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

  useEffect(() => {
    if (targets.length > 0) {
      // start game when targets ready
      setRunning(true);
      setFinished(false);
      setIndex(0);
      setScore(0);
      setTimeLeft(20);
      setTotalTime(0);
      setHighlights({});
    }
  }, [targets]);

  const handleTimeout = () => {
    // mark current target as missed
    const cur = targets[index];
    setHighlights(h => ({ ...h, [cur]: 'wrong' }));
    // move next after short delay
    setTimeout(() => {
      setHighlights(h => {
        const copy = { ...h };
        delete copy[cur];
        return copy;
      });
      if (index + 1 >= targets.length) {
        setFinished(true);
        setRunning(false);
      } else {
        setIndex(i => i + 1);
        setTimeLeft(20);
      }
    }, 700);
  };

  const handleClickGeo = (geo: any, event?: any) => {
    if (!running || finished) return;
    const name = getNameFromGeo(geo) || geo.id || geo.properties && (geo.properties.NAME || geo.properties.ADMIN);
    const targetName = targets[index];
    if (!name) return;

    const correct = name === targetName;
    setHighlights(h => ({ ...h, [name]: correct ? 'correct' : 'wrong' }));
    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      setHighlights(h => {
        const copy = { ...h };
        delete copy[name];
        return copy;
      });
      if (index + 1 >= targets.length) {
        setFinished(true);
        setRunning(false);
      } else {
        setIndex(i => i + 1);
        setTimeLeft(20);
      }
    }, 700);
  };

  const resetGame = () => {
    setTargets([]);
    setGeos([]);
    setIndex(0);
    setScore(0);
    setFinished(false);
    setRunning(false);
    setTimeLeft(20);
    setTotalTime(0);
    // refetch targets
    fetch(GEO_URL)
      .then(res => res.json())
      .then((topo) => {
        const obj = topo.objects.countries || topo.objects.ne_110m_admin_0_countries || Object.values(topo.objects)[0];
        const geographies = (obj && obj.geometries) ? obj.geometries : [];
        setGeos(geographies);
      });
  };

  return (
    <div className="map-quiz-wrapper">
      <div className="map-quiz-header">
        <h2>Dünya Haritası - Ülke Tahmin Oyunu</h2>
        <div className="map-quiz-stats">
          <div>Puan: {score}/{targets.length}</div>
          <div>Süre (soru): {timeLeft}s</div>
          <div>Toplam süre: {totalTime}s</div>
          <div>Soru: {Math.min(index + 1, targets.length)}/{targets.length}</div>
        </div>
      </div>

      <div className="map-quiz-content">
        <div className="target-box">
          {targets.length > 0 ? (
            <>
              <p className="target-label">Hedef Ülke:</p>
              <p className="target-name">{targets[index]}</p>
            </>
          ) : (
            <p>Harita yükleniyor...</p>
          )}
        </div>

        <div className="map-container">
          <ComposableMap projectionConfig={{ scale: 160 }} width={980} height={500}>
            <Geographies geography={GEO_URL}>
              {({ geographies }) => (
                geographies.map((geo) => {
                  const name = geo.properties && (geo.properties.NAME || geo.properties.ADMIN || geo.properties.name || geo.properties.NAME_LONG || geo.properties.name_en) || geo.id;
                  const highlight = highlights[name];
                  const target = targets[index];
                  const isTarget = name === target;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => handleClickGeo(geo)}
                      style={{
                        default: {
                          fill: highlight === 'correct' ? '#2ecc71' : highlight === 'wrong' ? '#e74c3c' : '#f4e9c1',
                          stroke: '#000',
                          strokeWidth: 0.3,
                        },
                        hover: {
                          fill: '#f0d36a',
                          outline: 'none'
                        },
                        pressed: {
                          fill: '#f0d36a'
                        }
                      }}
                    />
                  );
                })
              )}
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
