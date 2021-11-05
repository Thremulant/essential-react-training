import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StatePage } from './pages/State';
import { ComponentsPage } from './pages/Components';
import { EffectsPage } from './pages/Effects/index';
import { ComponentsSolution } from './pages/Components/solution';
import { StateSolution } from './pages/State/solution';
import { EffectsSolution } from './pages/Effects/solution';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/solution" element={<ComponentsSolution />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/state/solution" element={<StateSolution />} />
        <Route path="/effects" element={<EffectsPage />} />
        <Route path="/effects/solution" element={<EffectsSolution />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
