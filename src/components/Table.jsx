import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const negativeOne = -1;
  const { data,
    filteredName,
    filters: { filterByNumericValues, order } } = useContext(StarWarsContext);

  const nameFilter = (planet) => typeof planet.name === 'string' && planet.name
    .includes(filteredName);

  const valueSetFilter = (planet) => {
    let result = false;
    const initialValue = 0;
    let counter = initialValue;

    if (filterByNumericValues.length < 1) {
      result = true;
    } else {
      filterByNumericValues
        .map((setFilter) => {
          if (setFilter.comparison === 'maior que'
            && Number(planet[setFilter.column]) > setFilter.value) {
            counter += 1;
          }
          if (setFilter.comparison === 'menor que'
            && Number(planet[setFilter.column]) < setFilter.value) {
            counter += 1;
          }
          if (setFilter.comparison === 'igual a'
            && planet[setFilter.column] === setFilter.value.toString()) {
            counter += 1;
          }
          return counter;
        });
      if (counter === filterByNumericValues.length) {
        result = true;
      }
    }
    return result;
  };

  const columnFilterSet = () => (
    order.column === 'rotation_period'
    || order.column === 'orbital_period'
    || order.column === 'surface_water'
    || order.column === 'diameter'
    || order.column === 'population');

  const sorting = (prev, next) => {
    let result;
    if (order.sort === 'DESC' && columnFilterSet()) {
      result = (Number(prev[order.column]) < Number(next[order.column])
        ? 1 : negativeOne);
    }
    if (order.sort === 'ASC' && columnFilterSet()) {
      result = (Number(prev[order.column]) > Number(next[order.column])
        ? 1 : negativeOne);
    }
    if (order.sort === 'DESC' && !columnFilterSet()) {
      result = (prev[order.column] < next[order.column] ? 1 : negativeOne);
    }
    if (order.sort === 'ASC' && !columnFilterSet()) {
      result = (prev[order.column] > next[order.column] ? 1 : negativeOne);
    }
    return result;
  };

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0])
            .map((header, index) => (<th key={ index }>{header}</th>))}
        </tr>
      </thead>
      <tbody>
        {data
          .filter((planet) => nameFilter(planet) && valueSetFilter(planet))
          .sort((prev, next) => sorting(prev, next))
          .map((planet, index) => (
            <tr key={ index }>
              {Object.entries(planet)
                .map((orb, ind) => (orb[0] === 'name'
                  ? (<td data-testid="planet-name" key={ ind }>{ orb[1] }</td>)
                  : (<td key={ ind }>{ orb[1] }</td>)))}
            </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
