import React from 'react';

import Provider from './provider/Provider';

import Table from './Components/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
