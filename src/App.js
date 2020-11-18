import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import getPlanets from './api';
import StarWarsContext from './context/StarWarsContext';

function App() {
  const [data, setData] = useState();
  const [filterByName, setFilterByName] = useState('');
  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [NumberFilter, setNumberFilter] = useState('');
  const [buttonFilter, setButtonFilter] = useState(false);

  const handleChangeName = ({ target }) => {
    setFilterByName(target.value);
  };

  const handleChangeColumn = ({ target }) => {
    setColumnFilter(target.value);
  };

  const handleChangeComparison = ({ target }) => {
    setComparisonFilter(target.value);
  };

  const handleChangeNumber = ({ target }) => {
    setNumberFilter(target.value);
  };

  const handleButtonClick = () => {
    setButtonFilter(true);
    // setFilterByName('');
    // setColumnFilter('');
    // setComparisonFilter('');
    // setNumberFilter('');
  };

  const handleButtonExclude = () => {
    setButtonFilter(false);
    setFilterByName('');
    setColumnFilter('');
    setComparisonFilter('');
    setNumberFilter('');
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await getPlanets();
      setData(apiResponse.results);
    };

    fetchData();
  }, []);

  const filter = {
    data,
    filters: {
      filterByName: {
        name: filterByName,
      },
      filterByNumericValues: [
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: NumberFilter,
          button: buttonFilter,
        },
      ],
    },
  };

  return (
    <StarWarsContext.Provider value={ filter }>
      <label htmlFor="name-filter">
        Pesquisar por nome:
        <input
          data-testid="name-filter"
          type="text"
          name="name-filter"
          onChange={ handleChangeName }
        />
      </label>
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ handleChangeColumn }
      >
        <option>column</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ handleChangeComparison }
      >
        <option>comparison</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ NumberFilter }
        onChange={ handleChangeNumber }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleButtonClick }
      >
        Filtrar
      </button>
      <button
        type="button"
        data-testid="filter"
        onClick={ handleButtonExclude }
      >
        X
      </button>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
