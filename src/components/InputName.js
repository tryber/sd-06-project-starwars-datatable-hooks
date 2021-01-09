import React, { useContext, useState } from 'react';
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
    order, setOrder,
  } } = useContext(StarWarsContext);

  function inputRadio(e) {
    setOrder({...order, sort: e.target.value})
  }
  function inputSelect(e) {
    setOrder({...order, column: e.target.value})
  }

  const onSaveValues = () => {
    setColumn([...column, compColumn]);
    setComparar([...comparar, compComparison]);
    setValue([...value, compValue]);
  };
  return (
    <div>
      <form>
        <h1>Filtro de Planetas de Star Wars</h1>
        <div>
          <input type="text" data-testid="name-filter" onChange={handleChange} />
        </div>
        <div>
          <select
            data-testid="column-filter"
            onChange={(e) => setCompColumn(e.target.value)}
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
            onChange={(e) => setCompComparison(e.target.value)}
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
            onChange={(e) => setCompValue(e.target.value)}
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={onSaveValues}
          >
            Filtrar
          </button>
        </div>
        <select data-testid="column-sort" onChange={inputSelect}>
          <option value="name" key="name">name</option>
          <option value="population" key="population">population</option>
          <option value="orbital_period" key="orbital_period">orbital_period</option>
          <option value="diameter" key="diameter">diameter</option>
          <option value="rotation_period" key="rotation_period">rotation_period</option>
          <option value="surface_water" key="surface_water">surface_water</option>
        </select>
        <div>
          <label htmlFor="ASC">
            ASC
          <input
              type="radio"
              data-testid="column-sort-input-asc"
              value="ASC"
              onChange={inputRadio}
              name="sorting-radio"

            />
          </label>
          <label htmlFor="DESC">
            DESC
          <input
              type="radio"
              data-testid="column-sort-input-desc"
              value="DESC"
              onChange={inputRadio}
              name="sorting-radio"
            />
          </label>
        </div>
        <button
          type="submit"
          data-testid="column-sort-button"
          // onClick={}
        >
          Ordene
      </button>
      </form>
      <Filter />
    </div>
  );
}

export default InputFilters;
