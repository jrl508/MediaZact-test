import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, Javascript, CS, Navigation } from './components';

function App() {
  return (
    <div className='App'>
      <h1>MediaZact Test App</h1>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route exact path='/CS' component={CS} />
      <Route exact path='/javascript' component={Javascript} />
    </div>
  );
}

export default App;
