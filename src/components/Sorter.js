import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Sorter() {
  const {
    tableHeaders,
    applySort,
  } = useContext(StarWarsContext);

  const [sortData, setSortData] = useState({
    column: '',
    sort: 'ASC',
  });

  function onChange(event) {
    const { name: objectKey, value } = event.target;
    setSortData({
      ...sortData,
      [objectKey]: value,
    });
  }

  useEffect(() => {
    setSortData({
      ...sortData,
      column: tableHeaders[0],
    });
  }, [tableHeaders]);
  return (
    <div>
      <label htmlFor="column-sort">
        Sort by
        <select
          id="column-sort"
          name="column"
          className="form-control"
          data-testid="column-sort"
          onChange={ (event) => onChange(event) }
        >
          {tableHeaders.map((header, index) => (
            <option key={ index } value={ header }>{ header }</option>
          ))}
        </select>
      </label>
      <label htmlFor="column-sort-input-asc">
        Ascending
        <input
          type="radio"
          id="column-sort-input-asc"
          name="sort"
          data-testid="column-sort-input-asc"
          value="ASC"
          checked={ sortData.sort === 'ASC' }
          onChange={ (event) => onChange(event) }
        />
      </label>
      <label htmlFor="column-sort-input-desc">
        Descending
        <input
          type="radio"
          id="column-sort-input-desc"
          name="sort"
          data-testid="column-sort-input-desc"
          value="DESC"
          checked={ sortData.sort === 'DESC' }
          onChange={ (event) => onChange(event) }
        />
      </label>
      <button
        type="button"
        className="btn btn-primary"
        data-testid="column-sort-button"
        onClick={ () => applySort(sortData) }
      >
        Apply sort
      </button>
    </div>
  );
}

export default Sorter;
