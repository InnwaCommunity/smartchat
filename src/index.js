import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this line is present
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './app/login/page.tsx';
import SignupPage from './app/signup/page.tsx';
import ChatPage from './app/chat/page.tsx';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppRouter = () => {

  return (
    <Routes>
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<App />} />
    </Routes>
  );
};

root.render(
  <React.StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </React.StrictMode>
);

reportWebVitals();