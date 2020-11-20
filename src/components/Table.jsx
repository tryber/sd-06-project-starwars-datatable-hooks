import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    planets,
    getPlanets,
    filters,
    selectColumn,
    selectComparison,
    inputValue,
    setPlanets,
  } = useContext(StarWarsContext);

  const tableHeaders = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  function LukeSkyWalker() {
    const filterColumn = selectColumn;
    const filterComparison = selectComparison;
    const filterValue = inputValue;
    const reySkyWalker = planets.filter((planet) => {
      switch (filterComparison) {
      case 'maior que':
        return parseInt(planet[filterColumn], 10) > filterValue;
      case 'igual a':
        return parseInt(planet[filterColumn], 10) === parseInt(filterValue, 10);
      case 'menor que':
        return parseInt(planet[filterColumn], 10) < parseInt(filterValue, 10);
      default:
        break;
      }
      return true;
    });
    return setPlanets(reySkyWalker);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    LukeSkyWalker();
  }, [filters.filterByNumericValues]);

  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={ index }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets
          .filter((planet) => planet.name.toLowerCase()
            .includes(filters.filterByName.name.toLowerCase())).map(
            (
              {
                name,
                rotation_period: rotationPeriod,
                orbital_period: orbitalPeriod,
                diameter,
                climate,
                gravity,
                terrain,
                surface_water: surfaceWater,
                population,
                films,
                created,
                edited,
                url,
              },
              index,
            ) => (
              <tr key={ index }>
                <td>{name}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films.length}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            ),
          )}
      </tbody>
    </table>
  );
}

export default Table;
