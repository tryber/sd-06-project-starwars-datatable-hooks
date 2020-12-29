import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import PlanetTable from './components/PlanetTable';
import Search from './components/Search';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <div className="App">
        <Header />
        <Search />
        <PlanetTable />
        <Footer />
      </div>
    </StarWarsProvider>
  );
}

export default App;
