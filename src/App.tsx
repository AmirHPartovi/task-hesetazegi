import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './api/data'
import Card from './components/card/Card';
function App() {
  Data()
  return (
    <div className="App">
      <Card/>
    </div>
  );
}

export default App;
