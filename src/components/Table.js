import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, isLoading, setIsLoading, headerKeys } = useContext(StarWarsContext);
  const zero = 0;
  if (data.length && headerKeys.length > zero) {
    setIsLoading(true);
  }
  console.log(data);
  return (
    <table>
      <tr>
        {isLoading
          ? headerKeys.map((tableHeader) => (
            <th key={ tableHeader }>{tableHeader}</th>
          )) : null}
      </tr>
      <tbody>
        {isLoading
          ? data.map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
          : 'Loading'}
      </tbody>
    </table>
  );
}

export default Table;
