// src/components/CookieBanner.tsx
import React from 'react';

// "window" ve "localStorage" tiplerini TypeScript'e tanıtıyoruz
declare global {
  interface Window {
    ['ga-disable-G-51GLFGQ9JX']?: boolean;
  }
}

export default function CookieBanner() {
  // Kullanıcı daha önce karar verdiyse banner'ı gösterme
  if (localStorage.getItem('mindletr_cookies')) {
    return null;
  }

  const accept = () => {
    localStorage.setItem('mindletr_cookies', 'accepted');
    window.location.reload();
  };

  const reject = () => {
    localStorage.setItem('mindletr_cookies', 'rejected');
    // Google Analytics'i tamamen kapat
    window['ga-disable-G-51GLFGQ9JX'] = true;
    window.location.reload();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#1a2530',
        color: '#ecf0f1',
        padding: '16px 20px',
        fontSize: '14px',
        textAlign: 'center' as const, // ← BURAYI DÜZELTTİK
        zIndex: 9999,
        fontFamily: '"Inter", Arial, sans-serif',
        borderTop: '3px solid #2ecc71',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.5' }}>
        Bu site deneyimi iyileştirmek ve ziyaret istatistiklerini tutmak için çerez (Google Analytics) kullanıyor.
      </div>

      <div
        style={{
          marginTop: '12px',
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={accept}
          style={{
            background: '#2ecc71',
            color: 'white',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '15px',
          }}
        >
          Kabul Ediyorum
        </button>

        <button
          onClick={reject}
          style={{
            background: 'transparent',
            color: '#95a5a6',
            border: '1px solid #95a5a6',
            padding: '10px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Reddet
        </button>
      </div>
    </div>
  );
}