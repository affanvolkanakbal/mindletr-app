import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MapQuiz from './components/MapQuiz';
import KozArifQuiz from './components/KozArifQuiz';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const renderApp = () => {
  const path = window.location.pathname;
  if (path === '/map-quiz' || path === '/map-quiz/') {
    root.render(
      <React.StrictMode>
        <MapQuiz />
      </React.StrictMode>
    );
  } else if (path === '/koz-arif' || path === '/koz-arif/') {
    root.render(
      <React.StrictMode>
        <KozArifQuiz />
      </React.StrictMode>
    );
  } else {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
