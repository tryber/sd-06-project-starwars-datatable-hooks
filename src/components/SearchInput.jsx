import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { getSearchName, filterByNumber, filters, setFilters } = useContext(
    StarWarsContext,
  ).context;

  const zero = 0;
  // Estados locais criados para usar no onChange
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(zero);

  const addFilters = () => {
    filterByNumber(column, comparison, value);
  };

  const removeFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    });
    setColumn('');
    setComparison('');
    setValue('');
  };

  return (
    <div className="form-inline">
      <label htmlFor="search">
        Search the planet:
        <input
          data-testid="name-filter"
          className="form-control"
          type="text"
          name="search"
          id="search"
          onChange={ (event) => getSearchName(event.target.value) }
        />
      </label>
      <div data-testid="filter">
        <label htmlFor="filter-column">
          Filters:
          <select
            data-testid="column-filter"
            className="form-control"
            value={ column }
            onChange={ (event) => setColumn(event.target.value) }
          >
            <option disabled selected> -- select -- </option>
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        <select
          data-testid="comparison-filter"
          value={ comparison }
          className="form-control"
          onChange={ (event) => setComparison(event.target.value) }
        >
          <option disabled selected> -- select -- </option>
          <option>maior que</option>
          <option>igual a</option>
          <option>menor que</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          className="form-control"
          value={ value }
          onChange={ (event) => setValue(event.target.value) }
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={ removeFilter }
        >
          X
        </button>
      </div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilters }
        className="btn btn-outline-secondary"
      >
        Filter
      </button>
    </div>
  );
}

export default SearchInput;
