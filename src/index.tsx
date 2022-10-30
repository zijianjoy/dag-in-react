import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Graph } from './Graph/Graph';
import { CustomGraph } from './Graph/CustomGraph';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
      <Route path="/graph" element={<Graph />}>
      </Route>
      <Route path="/custom_graph" element={<CustomGraph />}>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
