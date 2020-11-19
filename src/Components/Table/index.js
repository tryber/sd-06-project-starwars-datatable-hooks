import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import request from '../../services/request';

const Table = () => {
  const {
    isFetching,
    setIsFetching,
    data,
    setData,
    filters } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  const { filterByNumericValues } = filters;
  useEffect(() => {
    const reqPlanets = async () => {
      const planets = await request();
      setData(planets);
      setIsFetching(true);
    };
    reqPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (isFetching)
    ? <h1>Loading...</h1>
    : (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            data.filter((planet) => planet.name.toUpperCase()
              .includes(name.toUpperCase()))
              .filter((array) => {
                if (filters.filterByNumericValues[0]) {
                  const columns = filters
                    .filterByNumericValues[filterByNumericValues.length - 1].column;
                  const comparisons = filters
                    .filterByNumericValues[filterByNumericValues.length - 1].comparison;
                  const values = filters
                    .filterByNumericValues[filterByNumericValues.length - 1].value;
                  if (comparisons === 'maior que') {
                    return array[columns] > parseInt(values, 10);
                  } if (comparisons === 'menor que') {
                    return array[columns] < parseInt(values, 10);
                  }
                  return array[columns] === values;
                }
                return array;
              })
              .map((planet, index) => (
                <tr key={ index }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    );
};

export default Table;
