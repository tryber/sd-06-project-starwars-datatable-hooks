import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Table() {
  const {
    data,
    getApi,
    searchName,
    filterByNumericValues,
    filterByFilter,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getApi();
  }, []);

  const handleFilter = () => {
    let check = data;
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        check = data.filter((el) => parseInt(el[column], 10) > parseInt(value, 10));
      }
      if (comparison === 'menor que') {
        check = data.filter((el) => parseInt(el[column], 10) < parseInt(value, 10));
        console.log(check.length);
      }
      if (comparison === 'igual a') {
        check = data.filter((el) => parseInt(el[column], 10) === parseInt(value, 10));
      }
    });
    return check;
  };

  useEffect(() => {
    handleFilter();
  }, [filterByNumericValues]);

  useEffect(() => {
    filterByFilter();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {handleFilter()
          .filter((el) => el.name.toLowerCase()
            .includes(searchName.toLowerCase()))
          .map((el, idx) => (
            <tr key={ idx }>
              <td>{ el.name }</td>
              <td>{ el.climate }</td>
              <td>{ el.created }</td>
              <td>{ el.diameter }</td>
              <td>{ el.edited }</td>
              <td>{ el.films }</td>
              <td>{ el.gravity }</td>
              <td>{ el.orbital_period }</td>
              <td>{ el.population }</td>
              <td>{ el.rotation_period }</td>
              <td>{ el.surface_water }</td>
              <td>{ el.terrain }</td>
              <td>{ el.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
