import React from 'react';
import Table from './components/Table';
import Input from './components/Input';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <Input />
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
