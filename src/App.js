import React from 'react';
import Table from './components/Table';
import Footer from './components/Footer';
import SearchInput from './components/SearchInput';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <SearchInput />
      <Table />
      <Footer />
    </Provider>
  );
}

export default App;
