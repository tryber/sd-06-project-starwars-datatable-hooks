import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function Filter() {
  const {
    setName,
    setFilteredPlanets,
    planets,
    usedFilters,
    setUsedFilters,
    filterFields,
    setFilterFields,
  } = useContext(AppContext);

  const COMPARISON_TYPE = ['maior que', 'menor que', 'igual a'];
  const ZERO = 0;
  const [chosenComparison, setChosenComparison] = useState('maior que');
  const [chosenField, setChosenField] = useState('population');
  const [chosenValue, setChosenValue] = useState(ZERO);

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === 'name') {
      setName(value);
    }
  };

  const manageFilter = () => {
    if (chosenValue !== ZERO) {
      switch (chosenComparison) {
      case 'maior que':
        setFilteredPlanets(planets.filter((planet) => (
          Number(planet[chosenField]) > Number(chosenValue)
          && planet[chosenField] !== 'unknown')));
        break;
      case 'menor que':
        setFilteredPlanets(planets.filter((planet) => (
          Number(planet[chosenField]) < Number(chosenValue)
          && planet[chosenField] !== 'unknown')));
        break;
      default:
        setFilteredPlanets(planets.filter((planet) => (
          Number(planet[chosenField]) === Number(chosenValue)
          && planet[chosenField] !== 'unknown')));
      }
      setFilterFields(filterFields.filter((field) => !usedFilters.includes(field)));
    }
  };

  const filterField = ({ target }) => {
    setChosenField(target.value);
    setUsedFilters((prev) => [...prev, target.value]);
  };

  const filterComparison = ({ target }) => {
    setChosenComparison(target.value);
  };

  const filterValue = ({ target }) => {
    setChosenValue(target.value);
  };

  const dropdownOption = (type) => (
    <option
      id={ type }
      name={ type }
      value={ type }
      key={ `${type}` }
    >
      { type }
    </option>
  );

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          data-testid="name-filter"
          id="name"
          name="name"
          type="text"
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <select
        data-testid="column-filter"
        value={ chosenField }
        onChange={ (e) => filterField(e) }
      >
        { filterFields.map((field) => dropdownOption(field)) }
      </select>
      <select
        data-testid="comparison-filter"
        value={ chosenComparison }
        onChange={ (e) => filterComparison(e) }
      >
        {COMPARISON_TYPE.map((type, index) => dropdownOption(type, index))}
      </select>
      <label htmlFor="value">
        Value
        <input
          data-testid="value-filter"
          id="value"
          name="value"
          type="number"
          onChange={ (e) => filterValue(e) }
        />
      </label>
      <button
        type="button"
        onClick={ (e) => manageFilter(e) }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
