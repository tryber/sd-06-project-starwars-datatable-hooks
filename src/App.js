import React, { useState } from 'react';
import PlanetsContext from './context/PlanetsContext';
import Table from './component/Table';

function App() {
  const [planets, setPlanets] = useState('');
  const [name, setName] = useState('');
  // 4 - criar o state que sera armazenado
  // no value do Provider
  const state = {
    planets,
    setPlanets,
    // incluir o state do filtro do input
    filters: {
      filterByName: {
        name,
        setName,
      },
    },
  };

  return (
    <main>
      {/* 3- criar Provider: Componentes acessa dados. Value state padroniza
       os dados que deverao ser lidos pelos componentes. */}
      <PlanetsContext.Provider value={ state }>
        <Table />
      </PlanetsContext.Provider>
    </main>
  );
}

export default App;
