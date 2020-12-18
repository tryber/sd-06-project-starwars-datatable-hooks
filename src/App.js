import React from 'react';
// import Table from './components/Table';
import Filter from './components/Filter';
import StarWarsProvider from './provider/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider >
      <Filter />
      {/*<Table />*/}
    </StarWarsProvider>
  );
}

export default App;
