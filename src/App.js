import React from 'react';

import Provider from './Context/StarWarsProvider';

import Table from './components/Table';

function App() {
  return (
    <div>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
