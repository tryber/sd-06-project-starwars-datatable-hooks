import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export const columnOptions = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const orderOptions = [
  'name',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
  'climate',
  'gravity',
  'terrain',
];

const comparisonOptions = ['', 'maior que', 'menor que', 'igual a'];

const FilterNumber = () => {
  const [localFilter, setLocalFilter] = useState(
    { column: '', comparison: '', value: '' },
  );

  const [orderBy, setOrderby] = useState(
    { column: 'name', sort: '' },
  );

  const handleOrder = (event) => {
    setOrderby({ ...orderBy, sort: event.target.value });
  };

  const handleOrderColumn = (event) => {
    setOrderby({ ...orderBy, column: event.target.value });
  };

  const { dataApi,
    filterNumber,
    setFilterNumber,
    setOrder } = useContext(StarWarsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrder(orderBy);
  };

  const columnFilter = filterNumber.map((filter) => filter.column);

  const remainingColumns = columnOptions
    .filter((column) => !columnFilter.includes(column));

  const zero = 0;

  return (
    <div>
      {dataApi.length !== zero && (
        <div>
          <h4>Apply more filters:</h4>
          <select
            data-testid="column-filter"
            onChange={ (event) => setLocalFilter(
              { ...localFilter, column: event.target.value },
            ) }
          >
            {remainingColumns.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            onChange={ (event) => setLocalFilter(
              { ...localFilter, comparison: event.target.value },
            ) }
          >
            {comparisonOptions.map((eachComparison, index) => (
              <option key={ index } value={ eachComparison }>{eachComparison}</option>
            ))}
          </select>
          <input
            data-testid="value-filter"
            type="number"
            onChange={ (event) => setLocalFilter(
              { ...localFilter, value: event.target.value },
            ) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => setFilterNumber([...filterNumber, localFilter]) }
          >
            Filtrar
          </button>
          <form onSubmit={ handleSubmit }>
            <div onChange={ handleOrder }>
              <label htmlFor="ASC">
                ASC
                <input
                  value="ASC"
                  type="radio"
                  data-testid="column-sort-input-asc"
                  name="radio"
                  id="ASC"
                />
              </label>
              <label htmlFor="DESC">
                DESC
                <input
                  value="DESC"
                  type="radio"
                  data-testid="column-sort-input-desc"
                  name="radio"
                  id="DESC"
                />
              </label>
            </div>
            <select
              data-testid="column-sort"
              onChange={ handleOrderColumn }
            >
              {orderOptions.map((eachPlanet) => (
                <option key={ eachPlanet } value={ eachPlanet }>{eachPlanet}</option>
              ))}
            </select>
            <button
              type="submit"
              data-testid="column-sort-button"
            >
              Order by
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterNumber;
