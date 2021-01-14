import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const {
    data,
    dataApi,
    search,
  } = useContext(StarWarsContext);

  const byValue = search.filters.filterByNumericValues;
  useEffect(() => {
    dataApi();
  }, []);

  function masterFilter() {
    let initialArray = data;
    const zero = 0;
    if (byValue.length === zero) return data;

    byValue.forEach((e) => {
      if (e.comparison === 'maior que') {
        initialArray = initialArray.filter((datae) => (
          (e.value < parseInt(datae[e.column], 10))));
      }
      if (e.comparison === 'menor que') {
        initialArray = initialArray.filter((datae) => (
          (e.value > parseInt(datae[e.column], 10))));
      }
      if (e.comparison === 'igual a') {
        initialArray = initialArray.filter((datae) => (
          (e.value === datae[e.column])));
      }
      return initialArray;
    });
    return initialArray;
  }
  const orderToMe = (a, b) => {
    const numericColumn = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];
    const zero = -1;
    const { column, sort } = search.filters.order;
    if (numericColumn.includes(column)) {
      if (sort === 'ASC') {
        return (a[column] - b[column]);
      }
      return (b[column] - a[column]);
    }
    if (sort === 'ASC') {
      return (a[column] > b[column] ? 1 : zero);
    }
    return (a[column] < b[column] ? 1 : zero);
  };
  const { filters: { filterByName: { name } } } = search;

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Orbital Period</th>
          <th>Population</th>
          {/* <th>Residents</th> */}
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {masterFilter() && masterFilter().sort(orderToMe)
          .filter((e) => e.name.toLowerCase()
            .includes(name.toLowerCase()))
          .map((e) => (
            <tr key={ e.name }>
              <td data-testid="planet-name">{ e.name }</td>
              <td>{ e.rotation_period }</td>
              <td>{ e.orbital_period }</td>
              <td>{ e.diameter }</td>
              <td>{ e.climate }</td>
              <td>{ e.gravity }</td>
              <td>{ e.terrain }</td>
              <td>{ e.surface_water }</td>
              <td>{ e.population }</td>
              <td>{ e.films }</td>
              <td>{ e.created }</td>
              <td>{ e.edited }</td>
              <td>{ e.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
