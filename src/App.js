import React from 'react';
import propic from './propic.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={propic} className="App-propic" alt="propic" />
        <div className="jumbotron" id="mainbody">
          <h1 className="display-4">eirene</h1>
          <p className="lead">full-stack software engineer</p>
          <p>hello! my name is eirene lakshita, and i'm an Atlanta-based software engineer.
          i have a diverse set of skills, ranging from object oriented programming, HTML + CSS + Javascript, all the way to data visualization and machine learning.
          </p>
          <a className="btn btn-outline-secondary btn-lg" href="https://www.linkedin.com/in/eirene-lakshita/" role="button">View my work<i className="fa fa-angle-double-right"></i></a>
          <a className="btn fa fa-linkedin-square" href="https://www.linkedin.com/in/eirene-lakshita/" role="button"></a>
          <a className="btn fa fa-github-square" href="https://github.com/eirenelakshita" role="button"></a>
        </div>
      </header>
    </div>
  );
}

export default App;
