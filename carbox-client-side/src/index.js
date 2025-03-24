import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App';
import SearchBox from './SearchBox';
import LoadingPage from './LoadingPage';
import FindingCarbox from './FindingCarbox';
import CarboxArrived from './CarboxArrived';
import QRScanner from './QRScanner';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
      <Route path="/CARBOX_app_try" element={<SearchBox />} />
      <Route path="/CARBOX_app_try/LoadingPage" element={<LoadingPage />} />
      <Route path="/CARBOX_app_try/FindingCarbox" element={<FindingCarbox />} />
      <Route path="/CARBOX_app_try/CarboxArrived" element={<CarboxArrived />} />
      <Route path="/CARBOX_app_try/QRScanner" element={<QRScanner />} />
    </Routes>
</BrowserRouter>
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
