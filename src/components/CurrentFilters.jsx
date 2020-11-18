import React from 'react';
import { useContext } from 'react';
import MyContext from '../context/MyContext';

function CurrentFilters() {
  const { columns, filters, filters: { filterByNumericValues }, setColumn, setFilter } = useContext(MyContext);

  const removeFilter = (column, index) => {
    setFilter({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues.slice(0, index),
        ...filterByNumericValues.slice(index + 1, filterByNumericValues.length),
      ]
    });

    setColumn([ ...columns, column]);
  };

  return ( (!filterByNumericValues.length)
  ? <div></div>
  : (
    <section>{filterByNumericValues.map(({ column, comparison,value }, index) => (
      <div data-testid='filter' key={index}>
        {`${column} ${comparison} ${value}`}
        <button type="button" onClick={() => removeFilter(column, index)}>X</button>
      </div>
    ))}</section>
  ));
};

export default CurrentFilters;
