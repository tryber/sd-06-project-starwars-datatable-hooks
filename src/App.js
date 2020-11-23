import React, { useContext } from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import AppContext from './context/AppContext';

function App() {
  const { planets, filteredPlanets } = useContext(AppContext);
  return (
    <Provider>
      <Table planets={ planets } filteredPlanets={ filteredPlanets } />
    </Provider>
  );
}

export default App;
