import React, { useState, useEffect } from 'react';
import requestApiStarWars from './service/api';
import StarWarsContext from './context/StarWarsContext';
import Table from './components/Table';
import EntryText from './components/EntryText';

function App() {
  // const filterIniti = {
  //   filters: {
  //     filterByName: {
  //       name: '',
  //     },
  //   },
  // };
  // const [filtersName, setFilterName] = useState(filterIniti);
  const [planetsList, setPlanetsList] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);
  const [entryText, setEntryText] = useState('');

  useEffect(() => {
    async function fetchPlanets() {
      const listPlanets = await requestApiStarWars();
      setPlanetsList(listPlanets);
      setPlanetsData(listPlanets);
    }
    fetchPlanets();
  }, []);

  function filterByText(text) {
    const listOrigin = planetsList;
    if (text) {
      const filterName = planetsList.filter((planet) => planet.name.includes(text));
      setPlanetsData(filterName);
      console.log('filter');
    } else {
      setPlanetsData(listOrigin);
      console.log('orign');
    }
  }

  function filtersSelectNumbers(col, comparison, value) {
    if (col !== null && comparison !== null && value !== null) {
      if (comparison === 'maior que') {
        const filterForNumber = planetsList
          .filter((position) => Number(position[col]) > value);
        setPlanetsData(filterForNumber);
      } else if (comparison === 'menor que') {
        const filterForNumber = planetsList
          .filter((position) => Number(position[col]) < value);
        setPlanetsData(filterForNumber);
      } else if (comparison === 'igual a') {
        const filterForNumber = planetsList
          .filter((position) => Number(position[col]) === Number(value));
        setPlanetsData(filterForNumber);
      }
    } else {
      setPlanetsData(planetsList);
    }
  }

  function handleOnchange({ target }) {
    const inputValue = target.value;
    setEntryText(inputValue);
    filterByText(inputValue);
  }

  return (
    <StarWarsContext.Provider
      value={
        {
          data: planetsData,
          handle: handleOnchange,
          filtersFunc: filtersSelectNumbers,
          text: entryText }
      }
    >
      <div>
        <EntryText />
        <p />
        <Table />
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
