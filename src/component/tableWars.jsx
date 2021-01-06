import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarContext';
import Header from './Header';

function TableWars() {
  const {
    planets,
    theadKeys,
    planetName,
    setPlanetName,
    setPlanets,
    dataPlanet,
    setPlanetFilter,
  } = useContext(StarWarsContext);
  const planetTable = planets;
  // const optionsSelects = planets.map((options) => Object.keys(options));
  const handle = () => {
    const regex = new RegExp(`\\w*${planetName}\\w*`, 'i');
    if (planetName) {
      const planetsFilter = planets
        .filter((filtered) => regex.test(filtered.name));
      setPlanets(planetsFilter);
    } else {
      dataPlanet();
    }
  };

  const handleRefine = () => {
    const columnSelected = document.getElementById('column').value;
    const comparisonFilter = document.getElementById('comparison').value;
    const valueFilter = parseInt(document.getElementById('valueFilter').value, 0);
    const filtered = {
      column: columnSelected,
      comparison: comparisonFilter,
      value: valueFilter,
    };
    setPlanetFilter(filtered);

    const planetsRefined = planets
      .filter((planet) => {
        const valueColumn = parseInt(planet[`${columnSelected}`], 0);
        if (comparisonFilter === 'maior que') return valueColumn > valueFilter;
        if (comparisonFilter === 'menor que') return valueColumn < valueFilter;
        if (comparisonFilter === 'igual a') return valueColumn === valueFilter;
        return null;
      });
    setPlanets(planetsRefined);
  };

  useEffect(() => {}, [planets]);

  useEffect(() => {
    handle();
  }, [planetName]);

  return (
    <div>
      <Header />
      <div>
        <label htmlFor="filter-planets">
          Name Planet
          <br />
          <input
            type="text"
            data-testid="name-filter"
            name="filter-planets"
            id="filter-planets"
            placeholder="Tatooine"
            onChange={ ({ target: { value } }) => {
              setPlanetName(value);
            } }
          />
        </label>
        <br />
        <fieldset>
          <legend>
            Refinar pesquisa
          </legend>
          <label htmlFor="column">
            <select id="column" data-testid="column-filter">
              <option value="population">population</option>
              <option value="orbital_period">orbital_period</option>
              <option value="diameter">diameter</option>
              <option value="rotation_period">rotation_period</option>
              <option value="surface_water">surface_water</option>
            </select>
          </label>
          <label htmlFor="comparison">
            <select id="comparison" data-testid="comparison-filter">
              <option value="maior que">maior que</option>
              <option value="menor que">menor que</option>
              <option value="igual a">igual a</option>
            </select>
          </label>
          <label htmlFor="valueFilter">
            <input id="valueFilter" type="number" data-testid="value-filter" />
          </label>
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleRefine }
          >
            Refinar busca
          </button>
        </fieldset>
      </div>
      <table border="1">
        <thead>
          <tr>
            {
              theadKeys.map((key) => (
                <th key={ key }>
                  {key.replace('_', ' ')}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            planetTable.map((planet) => (
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

export default TableWars;
