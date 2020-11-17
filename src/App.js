import React from 'react';
import Table from './components/Table';
import Footer from './components/Footer';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <main>
      <SearchInput />
      <Table />
      <Footer />
    </main>
  );
}

export default App;
