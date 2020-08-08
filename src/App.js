import React from 'react';
import propic from './propic.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={propic} className="App-propic" alt="propic" />
        <p>
          Start editing porfolio.
        </p>
        <a
          className="App-link"
          href="https://github.com/eirenelakshita"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to my Github
        </a>
      </header>
    </div>
  );
}

export default App;
