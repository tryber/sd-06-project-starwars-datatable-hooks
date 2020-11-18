import React, { useContext, useState, useEffect } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const [planetsName, setPlanetsName] = useState([]);
  const { filterByName, filterByNumericValues } = filters;
  const { column, comparison, value, button } = filterByNumericValues[0];

  useEffect(() => {
    if (data !== undefined) {
      setPlanetsName(data);
    }
  }, [data]);

  return (
    <table>
      <tbody>
        <tr>
          <th>nome</th>
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
        {
          planetsName.filter((f) => {
            const nValue = Number(value);

            if (filterByName.name !== '') {
              return f.name.includes(filterByName.name);
            }
            if (button && column === 'population' && comparison === 'maior que') {
              return Number(f.population) > nValue;
            }
            if (button && column === 'population' && comparison === 'menor que') {
              return Number(f.population) < nValue;
            }
            if (button && column === 'population' && comparison === 'igual a') {
              return Number(f.population) === nValue;
            }
            if (button && column === 'orbital_period' && comparison === 'maior que') {
              return Number(f.orbital_period) > nValue;
            }
            if (button && column === 'orbital_period' && comparison === 'menor que') {
              return Number(f.orbital_period) < nValue;
            }
            if (button && column === 'orbital_period' && comparison === 'igual a') {
              return Number(f.orbital_period) === nValue;
            }
            if (button && column === 'diameter' && comparison === 'maior que') {
              return Number(f.diameter) > nValue;
            }
            if (button && column === 'diameter' && comparison === 'menor que') {
              return Number(f.diameter) < nValue;
            }
            if (button && column === 'diameter' && comparison === 'igual a') {
              return Number(f.diameter) === nValue;
            }
            if (button && column === 'rotation_period' && comparison === 'maior que') {
              return Number(f.rotation_period) > nValue;
            }
            if (button && column === 'rotation_period' && comparison === 'menor que') {
              return Number(f.rotation_period) < nValue;
            }
            if (button && column === 'rotation_period' && comparison === 'igual a') {
              return Number(f.rotation_period) === nValue;
            }
            if (button && column === 'surface_water' && comparison === 'maior que') {
              return Number(f.surface_water) > nValue;
            }
            if (button && column === 'surface_water' && comparison === 'menor que') {
              return Number(f.surface_water) < nValue;
            }
            if (button && column === 'surface_water' && comparison === 'igual a') {
              return Number(f.surface_water) === nValue;
            }
            return f;
          }).map((e, id) => (
            <tr key={ id }>
              <td>{e.name}</td>
              <td>{e.climate}</td>
              <td>{e.created}</td>
              <td>{e.diameter}</td>
              <td>{e.films}</td>
              <td>{e.gravity}</td>
              <td>{e.orbital_period}</td>
              <td>{e.population}</td>
              <td>{e.rotation_period}</td>
              <td>{e.surface_water}</td>
              <td>{e.terrain}</td>
              <td>{e.url}</td>
            </tr>))
        }
      </tbody>
    </table>
  );
}

export default Table;
