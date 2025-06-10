import React, { useState, useEffect } from 'react';
import './App.css';

export default function Hero() {
  const [theme, setTheme] = useState({
    primary: '#00e676',
    background: '#121212',
    text: '#ffffff',
  });

  const applyTheme = (primary, background, text) => {
    setTheme({ primary, background, text });
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--background-color', theme.background);
    document.documentElement.style.setProperty('--text-color', theme.text);
  }, [theme]);

  return (
    <div className="hero" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)', transition: 'color 0.5s ease' }}>
      <h1 style={{ color: 'var(--primary-color)' }}>CheapTools.shop</h1>
      <p id="hero-subtext" style={{ color: theme.primary === '#444444' && theme.background === '#dcdcdc' && theme.text === '#000000' ? '#000' : 'var(--text-color)', transition: 'color 0.5s ease' }}>
        Your one-stop shop for simple, powerful online tools
      </p>
      <div className="buttons">
        <button onClick={() => applyTheme('#00e676', '#121212', '#ffffff')}>Green / Dark</button>
        <button onClick={() => applyTheme('#444444', '#dcdcdc', '#000000')}>Gray / White</button>
      </div>
    </div>
  );
}
