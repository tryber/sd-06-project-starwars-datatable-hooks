import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

export default function SortInputs() {
  const { order, columns, setFilters, filters, isLoading } = useContext(StarWarsContext);
  const [sortValue, setSortValue] = useState(order.sort);
  const [columnBaseSort, setColumnBaseSort] = useState(order.column);

  const setSort = () => setFilters({
    ...filters,
    order: {
      sort: sortValue,
      column: columnBaseSort,
    },
  });
  if (isLoading) return null;
  return (
    <div>
      <label htmlFor="order-sort">
        ASC
        <input
          value="ASC"
          type="radio"
          name="order-sort"
          defaultChecked
          data-testid="column-sort-input-asc"
          onChange={ (event) => setSortValue(event.target.value) }
        />
        DSC
        <input
          value="DSC"
          type="radio"
          name="order-sort"
          data-testid="column-sort-input-desc"
          onChange={ (event) => setSortValue(event.target.value) }
        />
      </label>

      <select
        onChange={ (e) => setColumnBaseSort(e.target.value) }
        data-testid="column-sort"
      >
        {columns.map((column) => (
          <option
            key={ `column ${column}` }
            value={ column }
          >
            {column}
          </option>))}
      </select>
      <button
        type="button"
        onClick={ () => setSort() }
        data-testid="column-sort-button"
      >
        sort
      </button>
    </div>
  );
}
