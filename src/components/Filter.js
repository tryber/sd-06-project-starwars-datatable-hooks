import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function Filter() {
  const {
    setName,
    setFilteredPlanets,
    planets,
    filters,
    setFilters,
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
      if (filters.filterByNumericValues.length === ZERO) {
        setFilters((prev) => ({
          ...prev.filterByName,
          filterByNumericValues: [{
            column: chosenField,
            comparison: chosenComparison,
            value: chosenValue,
          }],
        }));
      } else {
        setFilters((prev) => ({
          ...prev.filterByName,
          filterByNumericValues: [...prev.filterByNumericValues, {
            column: chosenField,
            comparison: chosenComparison,
            value: chosenValue,
          }],
        }));
      }
      setFilterFields(filterFields.filter((field) => chosenField !== field));
    }
  };
  const arrangeFilter = (value, field, compare) => {
    if (value !== ZERO) {
      switch (compare) {
      case 'maior que':
        setFilteredPlanets(planets.filter((planet) => (
          Number(planet[field]) > Number(value)
          && planet[field] !== 'unknown')));
        break;
      case 'menor que':
        setFilteredPlanets(planets.filter((planet) => (
          Number(planet[field]) < Number(value)
          && planet[field] !== 'unknown')));
        break;
      default:
        setFilteredPlanets(planets.filter((planet) => (
          Number(planet[field]) === Number(value)
          && planet[field] !== 'unknown')));
      }
      setFilterFields(filterFields.filter((fieldAvalable) => chosenField
        !== fieldAvalable));
    }
  };

  const removeFilter = ({ target }) => {
    setFilters(filters.filterByNumericValues.filter((field) => field
      .column !== target.value));
    setFilteredPlanets(planets);
    filters.filterByNumericValues.map((filter) => arrangeFilter(filter));
  };

  const filterField = ({ target }) => {
    setChosenField(target.value);
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

  /* const renderUsedFilters = (filter) => (
    <div
      className="filter"
      data-testid="filter"
      key={ filter }
    >
      { filter.column }
      <button
        onClick={ (e) => removeFilter(e) }
        type="button"
      >
        x
      </button>
    </div>
  ); */

  return (
    <div>
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
      { filters.filterByNumericValues
        && filters.filterByNumericValues
          .map((filter) => (
            <div
              className="filter"
              data-testid="filter"
              key={ filter }
            >
              { filter.column }
              <button
                type="button"
                onClick={ (e) => removeFilter(e) }
              >
                x
              </button>
            </div>
          ))}
    </div>
  );
}

export default Filter;
