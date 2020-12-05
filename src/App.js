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
      const zero = 0;
      const negativoNumber = -1;
      const listPlanets = await requestApiStarWars();
      listPlanets.sort((a, b) => {
        if (a.name < b.name) return negativoNumber;
        if (a.name > b.name) return 1;
        return zero;
      });
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
    } else {
      setPlanetsData(listOrigin);
    }
  }

  async function selectOrder(col, type) {
    if (type === 'DESC') {
      const listOrderUpdate = planetsData;
      listOrderUpdate.sort((a, b) => b[col] - a[col]);
      const list = listOrderUpdate.concat();
      setPlanetsData(list);
    } else {
      const listOrderUpdate = planetsData;
      listOrderUpdate.sort((a, b) => a[col] - b[col]);
      const list = listOrderUpdate.concat();
      setPlanetsData(list);
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
          orderFunc: selectOrder,
          data: planetsData,
          handle: handleOnchange,
          filtersFunc: filtersSelectNumbers,
          funcFilterText: filterByText,
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
