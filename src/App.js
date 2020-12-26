import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import PlanetTable from './components/PlanetTable';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <PlanetTable />
      <Footer />
    </div>
  );
}

export default App;
