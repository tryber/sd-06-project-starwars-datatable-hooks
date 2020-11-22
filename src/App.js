import React from 'react';
import './sass/App.css';
import Table from './components/Table';
import Header from './components/Header';
import Provider from './context/Provider';
import CurrentFilters from './components/CurrentFilters';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <CurrentFilters />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
