import React from 'react';
import logo from 'images/logo.svg';
// import './App.css';
import AppStyle from 'Components/AppStyle';

const App = () => (
  <AppStyle className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </AppStyle>
);

export default App;
