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
    </div>
  );
}

export default Sorter;
