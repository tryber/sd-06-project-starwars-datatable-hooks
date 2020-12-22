import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Sorter() {
  const { tableHeaders } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="column-sort">
        Order by
        <select
          id="column-sort"
          name="column-sort"
          data-testid="column-sort"
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
          name="column-sort"
          data-testid="column-sort-input-asc"
          value="ASC"
        />
      </label>
      <label htmlFor="column-sort-input-desc">
        Descending
        <input
          type="radio"
          id="column-sort-input-desc"
          name="column-sort"
          data-testid="column-sort-input-desc"
          value="DESC"
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
      >
          Apply Ordering
      </button>
    </div>
  );
}

export default Sorter;
