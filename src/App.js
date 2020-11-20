import React from 'react';

// Componentes
import Table from './components/Table';
import Inputs from './components/Inputs';
// Providers
import Provider from './providers/Provider';

function App() { // o App é minha home
  return (
    <Provider>
      <main>
        <Inputs />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
