import React, { useContext, useState } from 'react';
// import { useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Filter from './filter';

function InputFilters() {
  const [compColumn, setCompColumn] = useState('population');
  const [compComparison, setCompComparison] = useState('maior');
  const [compValue, setCompValue] = useState('');

  const { contextValue: {
    handleChange,
    column, setColumn,
    comparar, setComparar,
    value, setValue,
  } } = useContext(StarWarsContext);

  const onSaveValues = () => {
    setColumn([...column, compColumn]);
    setComparar([...comparar, compComparison]);
    setValue([...value, compValue]);
  };

  return (
    <div>
      <form>
        <div>
          <input type="text" data-testid="name-filter" onChange={ handleChange } />
        </div>
        <div>
          <select
            data-testid="column-filter"
            onChange={ (e) => setCompColumn(e.target.value) }
          >
            <option
              value="population"
            >
              population
            </option>
            <option
              value="orbital_period"
            >
              orbital_period
            </option>
            <option
              value="diameter"
            >
              diameter
            </option>
            <option
              value="rotation_period"
            >
              rotation_period
            </option>
            <option
              value="surface_water"
            >
              surface_water
            </option>
          </select>

          <select
            data-testid="comparison-filter"
            onChange={ (e) => setCompComparison(e.target.value) }
          >
            <option
              value="maior"
            >
              maior que
            </option>
            <option
              value="menor que"
            >
              menor que
            </option>
            <option
              value="igual a"
            >
              igual a
            </option>
          </select>

          <input
            type="text"
            data-testid="value-filter"
            onChange={ (e) => setCompValue(e.target.value) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ onSaveValues }
          >
            Filtrar
          </button>
        </div>
      </form>
      <Filter />
    </div>
  );
}

export default InputFilters;
