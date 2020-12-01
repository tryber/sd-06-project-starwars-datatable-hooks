import React from 'react';
import StarWarProvider from './context/StarWarProvider';
import StarWarsTable from './components/StarWarsTable';

function App() {
  return (
    <StarWarProvider>
      <StarWarsTable />
    </StarWarProvider>
  );
}

export default App;
