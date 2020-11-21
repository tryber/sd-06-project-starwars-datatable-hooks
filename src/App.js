import React from 'react';
import './App.css';

import StarWarsProvider from './context/StarWarsProvider';

import Header from './components/Header';
import InputFilterBar from './components/InputFilterBar';
import Table from './components/Table';

function App() {
  return (
    // como exemplificado na thread (17/11/2020):
    // [https://trybecourse.slack.com/archives/C016CCMKN9E/p1605647441012100]
    <StarWarsProvider>
      <Header />
      <InputFilterBar />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
