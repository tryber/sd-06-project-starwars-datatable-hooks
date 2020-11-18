import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './components/Provider';
import SearchBox from './components/SearchBox';
// import * as API from './services/api';
// import API from './services/api';

function App() {
  return (
    <Provider>
      <SearchBox />
      <Table />
    </Provider>
  );
}

export default App;
