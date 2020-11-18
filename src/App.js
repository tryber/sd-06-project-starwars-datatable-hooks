import React from 'react';

import StarWarsProvider from './Context/StarWarsProvider';

import Table from './components/Table';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
