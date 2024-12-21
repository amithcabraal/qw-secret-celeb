import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GameView } from './components/GameView';
import { EffectsView } from './components/EffectsView';
import { AdminView } from './components/AdminView';
import { Menu } from './components/Menu';
import { Privacy } from './components/pages/Privacy';
import { HowToPlay } from './components/pages/HowToPlay';
import { Share } from './components/pages/Share';

export function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/effects" replace />} />
          <Route path="/effects" element={<EffectsView />} />
          <Route path="/mask" element={<GameView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/share" element={<Share />} />
          <Route path="*" element={<Navigate to="/effects" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;