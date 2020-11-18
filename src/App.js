import React, { useState } from 'react';
import PlanetsContext from './context/PlanetsContext';
import Table from './component/Table';

function App() {
  const [planets, setPlanets] = useState('');
  // 4 - criar o state que sera armazenado no value do Provider no context
  const state = {
    planets,
    setPlanets,
  };

  return (
    <main>
      {/* 3- criar Provider: Componentes acessa dados. Value state padroniza
       os dados que deverao ser lidos pelos componentes. */}
      <PlanetsContext.Provider value={ state }>
        <Table />
      </PlanetsContext.Provider>
      {console.log(state)}
    </main>
  );
}

export default App;
