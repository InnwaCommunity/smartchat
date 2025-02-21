import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import { Link,useNavigate } from 'react-router-dom';

function App() {
  
  const navigate = useNavigate();

  useEffect(() => {
    const isVerified = Cookies.get('isVerified');
    const hasAccount = Cookies.get('hasAccount');

    if (!hasAccount) {
      navigate('/signup');
    } else if (!isVerified) {
      navigate('/login');
    } else {
      navigate('/chat');
    }
  }, [navigate]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/login" className="App-link">
          Go to Login
        </Link>
        <Link to="/signup" className="App-link">
          Go to Signup
        </Link>
        <Link to="/chat" className="App-link">
          Go to Chat
        </Link>
      </header>
    </div>
  );
}

export default App;
