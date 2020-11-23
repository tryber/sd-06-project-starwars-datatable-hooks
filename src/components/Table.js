import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Order from './Order';

function Table() {
  const { planets, loading, filters, setFilters } = useContext(StarWarsContext);
  const zero = 0;
  const one = 1;
  const negOne = -1;

  const filterPlanetsByName = (_planets) => (
    _planets.filter((planet) => planet.name.includes(filters.filterByName.name))
  );

  const biggerThen = (planerColumn, number) => (
    parseInt(planerColumn, 10) > parseInt(number, 10)
  );
  const lessThen = (planerColumn, number) => (
    parseInt(planerColumn, 10) < parseInt(number, 10)
  );
  const equalTo = (planerColumn, number) => (
    parseInt(planerColumn, 10) === parseInt(number, 10)
  );

  const getComparisons = (planet, column, comparison, value) => {
    const comparisons = {
      'maior que': biggerThen(planet[column], value),
      'menor que': lessThen(planet[column], value),
      'igual a': equalTo(planet[column], value),
    };
    return comparisons[comparison];
  };

  const filterPlanetsByNumericValues = (_planets) => {
    const { filterByNumericValues } = filters;

    if (filterByNumericValues.length === zero) {
      return _planets;
    }

    return _planets.filter((planet) => (filterByNumericValues.every((filter) => (
      getComparisons(planet, filter.column, filter.comparison, filter.value, filter)
    ))));
  };

  const sortPlanets = (_planets) => {
    const arrayColumns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    if (arrayColumns.includes(filters.order.column)) {
      _planets.sort((b, a) => {
        if (parseInt(a[filters.order.column], 10)
          < parseInt(b[filters.order.column], 10)) {
          return filters.order.sort === 'ASC' ? one : negOne;
        }
        if (parseInt(a[filters.order.column], 10)
          > parseInt(b[filters.order.column], 10)) {
          return filters.order.sort === 'ASC' ? negOne : one;
        }
        return zero;
      });
    } else {
      _planets.sort((b, a) => {
        if (a[filters.order.column] < b[filters.order.column]) {
          return filters.order.sort === 'ASC' ? one : negOne;
        }
        if (a[filters.order.column] > b[filters.order.column]) {
          return filters.order.sort === 'ASC' ? negOne : one;
        }
        return zero;
      });
    }
    return _planets;
  };

  const filterPlanets = () => {
    const planetsByName = filterPlanetsByName(planets);
    const planetsByNumericValue = filterPlanetsByNumericValues(planetsByName);
    const sortedPlanets = sortPlanets(planetsByNumericValue);

    return sortedPlanets;
  };

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(zero);

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

  const handleFiltered = (index) => {
    const newAvailableColumns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const newFilterByNumericValues = [...filters.filterByNumericValues];
    newFilterByNumericValues.splice(index, 1);
    newAvailableColumns.splice(newAvailableColumns
      .indexOf(filters.filterByNumericValues.column), 1);

    setFilters(
      { ...filters,
        filterByNumericValues: newFilterByNumericValues,
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
              value={ value }
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
          <div>
            { filters.filterByNumericValues.map((filter, index) => (
              <div key={ index } data-testid="filter">
                { `${filter.column} ${filter.comparison} ${filter.value}` }
                <button
                  type="button"
                  onClick={ () => handleFiltered(index) }
                >
                  X
                </button>
              </div>
            )) }
          </div>
          <Order />
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
                .map((planet, index) => (
                  <tr key={ index }>
                    <td>{ planet.climate }</td>
                    <td>{ planet.created }</td>
                    <td>{ planet.diameter }</td>
                    <td>{ planet.edited }</td>
                    <td>{ planet.films }</td>
                    <td>{ planet.gravity }</td>
                    <td data-testid="planet-name">{ planet.name }</td>
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
