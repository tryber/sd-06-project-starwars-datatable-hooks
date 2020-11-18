import React from 'react';

// Componentes
import Table from './components/Table';

// Providers
import Provider from './providers/Provider';

function App() { // o App é minha home
  return (
    <Provider>
      <main>
        <Table />
      </main>
    </Provider>
  );
}

export default App;
