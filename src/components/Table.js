import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const {
    data,
    filters,
    getPlanetsList,
    isLoading,
    setIsLoading,
    searchTermValue,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsList();
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  const filterDataHandler = (planets) => {
    const { filterByNumericValues } = filters;

    if (filterByNumericValues.length) {
      let newPlanetsList = planets;

      filterByNumericValues.forEach((currentFilter) => {
        newPlanetsList = newPlanetsList.filter((planet) => {
          switch (currentFilter.comparison) {
          case 'maior que':
            return parseFloat(planet[currentFilter.column])
              > parseFloat(currentFilter.value)
              && planet[currentFilter.column] !== 'unknown';
          case 'menor que':
            return parseFloat(planet[currentFilter.column])
              < parseFloat(currentFilter.value)
              && planet[currentFilter.column] !== 'unknown';
          case 'igual a':
            return parseFloat(planet[currentFilter.column])
              === parseFloat(currentFilter.value)
              && planet[currentFilter.column] !== 'unknown';
          default:
            return null;
          }
        });
      });

      return newPlanetsList;
    }

    return planets;
  };

  return isLoading ? <h1>Loading</h1> : (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Diameter</th>
          <th>Gravity</th>
          <th>Orbital Period</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>Films</th>
          <th>URL</th>
          <th>Created</th>
          <th>Edited</th>
        </tr>
      </thead>
      <tbody>
        { filterDataHandler(data).filter((planet) => planet.name.toLowerCase()
          .includes(searchTermValue.toLowerCase()))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.population }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.terrain }</td>
              <td>
                { planet.films.map((film) => (
                  <a
                    key={ film }
                    href={ film }
                  >
                    { film.replace('http://swapi.dev/api/films/', '').replace('/', ' ') }
                  </a>
                )) }
              </td>
              <td>{ planet.url }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
            </tr>
          )) }
      </tbody>
    </table>
  );
}
