import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function Filter() {
  const { setName, setFilteredPlanets, planets } = useContext(AppContext);

  const FILTER_FIELDS = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const COMPARISON_TYPE = ['maior que', 'menor que', 'igual a'];
  const ZERO = 0;
  const [chosenComparison, setChosenComparison] = useState('');
  const [chosenField, setChosenField] = useState('');
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
          planet[chosenField] > chosenValue && planet[chosenField] !== 'unknow')));
        break;
      case 'menor que':
        setFilteredPlanets(planets.filter((planet) => (
          planet[chosenField] < chosenValue && planet[chosenField] !== 'unknow')));
        break;
      default:
        setFilteredPlanets(planets.filter((planet) => (
          planet[chosenField] === chosenValue && planet[chosenField] !== 'unknow')));
      }
    }
  };

  const filterField = ({ target }) => {
    setChosenField(target.form[1].value);
  };

  const filterComparison = ({ target }) => {
    setChosenComparison(target.form[2].value);
  };

  const filterValue = ({ target }) => {
    setChosenValue(target.form[3].value);
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
        { FILTER_FIELDS.map((field, index) => (
          dropdownOption(field, index))) }
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
