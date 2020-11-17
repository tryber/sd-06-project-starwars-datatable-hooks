import React from 'react';
import Provider from './context/Provider';
import { Table, Header } from './components';

import './css/App.css';

function App() {
  return (
    <Provider>
      <Header />
      <section className="App">
        <Table />
      </section>
    </Provider>
  );
}

export default App;
