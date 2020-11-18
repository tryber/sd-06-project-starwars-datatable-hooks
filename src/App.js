import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';

import InputFilter from './components/InputFilter';
import FormsFilter from './components/FormsFilter';
import Table from './components/Table';

import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <div className="App">
        <div className="form-group mx-sm-3 mb-2">
          <InputFilter />
          <FormsFilter />
        </div>
      </div>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
