import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets, loading, filters, setFilters } = useContext(StarWarsContext);

  const filterPlanetsByName = (_planets) => (
    _planets.filter((planet) => planet.name.includes(filters.filterByName.name))
  );

  const filterPlanetsByNumericValues = (_planets) => {
    const { filterByNumericValues } = filters;
    const zero = 0;

    if (filterByNumericValues.length === zero) {
      return _planets;
    }
    switch (filterByNumericValues[0].comparison) {
    case 'maior que':
      return _planets.filter((planet) => (
        parseInt(planet[filterByNumericValues[0].column], 10)
        > parseInt(filterByNumericValues[0].value, 10)
      ));
    case 'igual a':
      return _planets.filter((planet) => (
        parseInt(planet[filterByNumericValues[0].column], 10)
        === parseInt(filterByNumericValues[0].value, 10)
      ));
    case 'menor que':
      return _planets.filter((planet) => (
        parseInt(planet[filterByNumericValues[0].column], 10)
        < parseInt(filterByNumericValues[0].value, 10)
      ));
    default: return _planets;
    }
  };

  const filterPlanets = () => {
    const planetsByName = filterPlanetsByName(planets);
    const planetsByNumericValue = filterPlanetsByNumericValues(planetsByName);

    return planetsByNumericValue;
  };

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const handleName = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setComparison(target.value);
  };

  const handleValue = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    const zero = 0;
    if (filters.availableColumns.length > zero) {
      setColumn(filters.availableColumns[zero]);
    }
  }, [filters.availableColumns]);

  const handleFilter = () => {
    const newAvailableColumns = filters.availableColumns
      .filter((element) => element !== column);

    setFilters(
      { ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column,
            comparison,
            value,
          },
        ],
        availableColumns: newAvailableColumns,
      },
    );
  };

  return (
    <div>
      { loading ? (<p>Loading...</p>) : (
        <div>
          <div>
            <input
              data-testid="name-filter"
              type="text"
              onChange={ handleName }
            />
          </div>
          <div>
            <select
              data-testid="column-filter"
              name="column"
              onChange={ handleColumn }
            >
              { filters.availableColumns.map((availableColumn) => (
                <option value={ availableColumn } key={ availableColumn }>
                  { availableColumn }
                </option>
              )) }
            </select>
            <select
              data-testid="comparison-filter"
              name="comparison"
              onChange={ handleComparison }
            >
              <option value="maior que">maior que</option>
              <option value="igual a">igual a</option>
              <option value="menor que">menor que</option>
            </select>
            <input
              data-testid="value-filter"
              name="value"
              type="number"
              onChange={ handleValue }
            />
            <button
              data-testid="button-filter"
              type="button"
              onClick={ handleFilter }
            >
              Filter
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Climate</th>
                <th>Created</th>
                <th>Diameter</th>
                <th>Edited</th>
                <th>Films</th>
                <th>Gravity</th>
                <th>Name</th>
                <th>Orbital Period</th>
                <th>Population</th>
                <th>Rotation Period</th>
                <th>Surface Water</th>
                <th>Terrain</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              { filterPlanets()
                .map((planet) => (
                  <tr key={ planet.name }>
                    <td>{ planet.climate }</td>
                    <td>{ planet.created }</td>
                    <td>{ planet.diameter }</td>
                    <td>{ planet.edited }</td>
                    <td>{ planet.films }</td>
                    <td>{ planet.gravity }</td>
                    <td>{ planet.name }</td>
                    <td>{ planet.orbital_period }</td>
                    <td>{ planet.population }</td>
                    <td>{ planet.rotation_period }</td>
                    <td>{ planet.surface_water }</td>
                    <td>{ planet.terrain }</td>
                    <td>{ planet.url }</td>
                  </tr>
                )) }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Table;
