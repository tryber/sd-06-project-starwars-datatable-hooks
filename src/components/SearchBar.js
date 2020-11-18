import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const {
    filterByName,
    setFilterName,
    filterByNumericValues,
    setNumericValues,
  } = useContext(StarWarsContext);

  const handleClick = () => {
    const getColumn = document.getElementById('column-filter');
    const columnValue = getColumn.options[getColumn.selectedIndex].value;
    const getComparison = document.getElementById('comparison-filter');
    const comparisonValue = getComparison
      .options[getComparison.selectedIndex].value;
    const getValue = document.getElementById('value-filter').value;

    if (filterByNumericValues[0] === null || filterByNumericValues[0].column === '') {
      setNumericValues([{
        column: columnValue,
        comparison: comparisonValue,
        value: getValue,
      }]);
    } else {
      setNumericValues([...filterByNumericValues, {
        column: columnValue,
        comparison: comparisonValue,
        value: getValue,
      }]);
    }
  };

  return (
    <section>
      <label htmlFor="name-filter">
        Name:
        <input
          type="text"
          name="name-filter"
          data-testid="name-filter"
          onChange={ (event) => setFilterName({
            ...filterByName, name: event.target.value.toLowerCase(),
          }) }
        />
      </label>
      <select
        id="column-filter"
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        id="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Aplly Filters
      </button>
    </section>
  );
}

export default SearchBar;
