import React from 'react';
import StarWarsContext from './context/StarWarsContext';
import Table from './components/Table';

function App() {
  const getApiPlanets = async () => {
    const responseApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const dados = await responseApi.json();
    const Planets = await dados.results
      .map((item) => {
        delete item.residents;
        return item;
      });
    return Planets;
  };

  const data = getApiPlanets();

  return (
    <StarWarsContext.Provider value={ data }>
      <header>
        Star Wars Planets
      </header>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
