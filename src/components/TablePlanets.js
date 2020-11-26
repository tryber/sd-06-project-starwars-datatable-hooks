import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TablePlanets() {
  const { contexts } = useContext(StarWarsContext);
  const {
    planets,
    setPlanets,
    filters,
    comparison,
    wichColumn,
    filterNumber,
  } = contexts;

  const headersTable = [
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

  const numericFilterComparsion = () => {
    const filterPlanets = planets.filter((any) => {
      const convertNumber = any[wichColumn];
      switch (comparison) {
      case 'menor que':
        return Number(convertNumber) < Number(filterNumber);
      case 'igual a':
        return Number(convertNumber) === Number(filterNumber);
      case 'maior que':
        return Number(convertNumber) > Number(filterNumber);
      default:
        break;
      }
      return true;
    });
    return setPlanets(filterPlanets);
  };

  useEffect(() => {
    numericFilterComparsion();
  }, [filters.filterByNumericValues]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headersTable.map((headers, index) => (
              <th key={ index }>{headers}</th>))}
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
    </div>
  );
}

export default TablePlanets;
