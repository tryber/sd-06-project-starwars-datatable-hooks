import React, { useState, useEffect } from 'react';
import requestApiStarWars from './service/api';
import StarWarsContext from './context/StarWarsContext';
import Table from './components/Table';
import EntryText from './components/EntryText';

function App() {
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
