import React from 'react';
import './App.css';
import LoginPage from './pages/auth/signin';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1>App is working!</h1>
      <LoginPage />
    </div>
  );
}

export default App;