import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericFilter() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState();
  const columns = [
    'population',
    'orbital_period',
    'diameter', 'rotation_period',
    'surface_water',
  ];
  const filteredColumns = filters.filters.filterByNumericValue
    .map((indvidualFilter) => indvidualFilter.column);
  console.log('Filtered Columns: ', filteredColumns);

  let availableColumns = [...columns];
  console.log('Available Columns: ', availableColumns);

  const onColumnChange = ({ target }) => {
    const selectedColumn = target.value;
    setColumn(selectedColumn);
  };

  const sendFilter = () => {
    const newFilter = {
      column,
      comparison,
      value,
    };
    setFilters({
      ...filters,
      filters: {
        ...filters.filters,
        filterByNumericValue: [
          ...filters.filters.filterByNumericValue,
          newFilter,
        ],
      },
    });
    availableColumns = availableColumns.splice(availableColumns.indexOf(column), 1);
  };

  return (
    <div>
      <label htmlFor="select-filter">
        Select a column:
        <select onChange={ onColumnChange } value={ column } data-testid="column-filter">
          { availableColumns.map((nonFilteredColumn, index) => (
            <option key={ index } value={ nonFilteredColumn }>
              { nonFilteredColumn }
            </option>
          ))}
        </select>
      </label>
      <button type="button" onClick={ sendFilter }>send filter</button>
    </div>
  );
}

export default NumericFilter;
