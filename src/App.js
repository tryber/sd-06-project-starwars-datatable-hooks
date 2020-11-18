import React from 'react';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <div>App</div>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
