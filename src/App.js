import React from 'react';
import Table from './components/Table';
import Input from './components/Input';
import ComparisonInput from './components/ComparisonInput';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <Input />
        <ComparisonInput />
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
