import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './Table.css';

function Table() {
  const { data, loading, filters, setFilters } = useContext(StarWarsContext);
  const zero = 0;
  const filterPlanetsByName = (_data) => (
    _data.filter((planet) => planet.name.includes(filters.filterByName.name))
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

  const filterPlanetsByNumericValues = (_data) => {
    const { filterByNumericValues } = filters;

    if (filterByNumericValues.length === zero) {
      return _data;
    }

    return _data.filter((planet) => (filterByNumericValues.every((filter) => (
      getComparisons(planet, filter.column, filter.comparison, filter.value, filter)
    ))));
  };

  const filterPlanets = () => {
    const planetsByName = filterPlanetsByName(data);
    const planetsByNumericValue = filterPlanetsByNumericValues(planetsByName);

    return planetsByNumericValue;
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
    <div className="space">
      { loading ? (<p>Loading...</p>) : (
        <div>
          <div>
            <input
              data-testid="name-filter"
              type="text"
              onChange={ handleName }
              placeholder="insert the name"
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
          <table className="table table-dark">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Climate</th>
                <th scope="col">Created</th>
                <th scope="col">Diameter</th>
                <th scope="col">Edited</th>
                <th scope="col">Films</th>
                <th scope="col">Gravity</th>
                <th scope="col">Name</th>
                <th scope="col">Orbital Period</th>
                <th scope="col">Population</th>
                <th scope="col">Rotation Period</th>
                <th scope="col">Surface Water</th>
                <th scope="col">Terrain</th>
                <th scope="col">URL</th>
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
