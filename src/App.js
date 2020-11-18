import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import './App.css';
// import SWAPIFetch from './services/SWAPIFetch';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
