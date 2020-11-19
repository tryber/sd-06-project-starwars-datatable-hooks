import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Provider from './context/Provider';

const App = () => (
  <Provider>
    <Home />
  </Provider>
);

export default App;
