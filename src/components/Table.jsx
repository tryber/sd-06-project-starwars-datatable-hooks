import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, isLoading, setIsLoading, headers, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues } = filters;
  const { name } = filterByName;
  const { column, comparison, value } = filterByNumericValues[0];
  const zero = 0;
  if (data.length && headers.length > zero) {
    setIsLoading(false);
  }

  const filterOptions = (planets) => {
    if(comparison === '') {
      return true;
    }
    if(comparison === 'maior que') {
      if(Number(planets[column]) > Number(value)) {
        return true;
      }
    }
    if(comparison === 'menor que') {
      if(Number(planets[column]) < Number(value)) {
        return true;
      }
    }
    if(comparison === 'igual a') {
      if(Number(planets[column]) === Number(value)) {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <h1>Tabela</h1>
      <table>
        <tr>
          {isLoading ? null : headers.map((tHead) => (
            <th key={ tHead }>{tHead}</th>
          ))}
        </tr>
        <tbody>
          {isLoading ? 'Loading' : data.filter((planets) => filterOptions(planets))
            .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
              .map((planet) => (
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
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;