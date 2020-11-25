import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TabStarWar() {
  const { filterNumber, setFilterNumber, returnAPI, setReturnAPI, filterName, setFilterName } = useContext(StarWarsContext);

  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets';

  async function getPlanetsInfo() {
    const request = await fetch(endPoint);
    const response = await request.json();
    const data = await response.results;
    return data;
  }

  useEffect(() => {
    async function getPlanets() {
      const data = await getPlanetsInfo();
      setReturnAPI(data);
    }
    getPlanets();
  }, [setReturnAPI]);

  function comparisionFilter(planets, filter) {
    if (filter.comparison === 'maior que') {
      return planets
        .filter((planet) => Number(planet[filter.column]) > Number(filter.value));
    } if (filter.comparison === 'menor que') {
      return planets
        .filter((planet) => Number(planet[filter.column]) < Number(filter.value));
    } if (filter.comparison === 'igual a') {
      return planets
        .filter((planet) => Number(planet[filter.column]) === Number(filter.value));
    }
    return planets;
  }

  let allStarWarsPlanetsData = returnAPI;
  filterNumber.forEach((filter) => {
    allStarWarsPlanetsData = comparisionFilter(allStarWarsPlanetsData, filter);
  });

  const comparisonFilterTypes = ['', 'maior que', 'menor que', 'igual a'];
  const [localFilter, setLocalFilter] = useState(
    { column: '', comparison: '', value: '' },
  );

  const filteredDropDownList = filterNumber.map((filter) => filter.column);

  const dropDownPlanetFilter = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const unusedListForm = dropDownPlanetFilter
    .filter((column) => !filteredDropDownList.includes(column));

  return (

  // {returnAPI.length === zero && <p>Loading...</p>}
  // {returnAPI.length !== zero && (
  // { returnAPI.length === zero && <p>Loading...</p> (
    <div>
      <form>
        <input
          placeholder="Planeta"
          data-testid="name-filter"
          type="text"
          name=""
          onChange={ (event) => setFilterName(
            { filterByName: { name: event.target.value } },
          ) }
        />
        <select
          data-testid="column-filter"
          onChange={ (e) => setLocalFilter(
            {
              ...localFilter,
              column: e.target.value,
            },
          ) }
        >
          {unusedListForm.map((column) => (
            <option
              key={ column }
              value={ column }
            >
              {column}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setLocalFilter(
            {
              ...localFilter,
              comparison: e.target.value,
            },
          ) }
        >
          {comparisonFilterTypes
            .map((comp, index) => (
              <option
                key={ index }
                value={ comp }
              >
                { comp }
              </option>
            ))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          onChange={ (e) => setLocalFilter(
            { ...localFilter,
              value: e.target.value,
            },
          ) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setFilterNumber([...filterNumber,
            localFilter]) }
        >
          Filtrar
        </button>
      </form>

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
        <tbody className="planets-table">
          {allStarWarsPlanetsData
            .filter((planetInfo) => planetInfo.name.toLowerCase()
              .includes(filterName.name.toLowerCase()))
            .map((planetInfo) => (
              <tr key={ planetInfo.name }>
                <td key={ planetInfo.name }>{planetInfo.name}</td>
                <td key={ planetInfo.rotation_period }>{planetInfo.rotation_period}</td>
                <td key={ planetInfo.orbital_period }>{planetInfo.orbital_period}</td>
                <td key={ planetInfo.diameter }>{planetInfo.diameter}</td>
                <td key={ planetInfo.climate }>{planetInfo.climate}</td>
                <td key={ planetInfo.gravity }>{planetInfo.gravity}</td>
                <td key={ planetInfo.terrain }>{planetInfo.terrain}</td>
                <td key={ planetInfo.surface_water }>{planetInfo.surface_water}</td>
                <td key={ planetInfo.population }>{planetInfo.population}</td>
                <td key={ planetInfo.films }>{planetInfo.films}</td>
                <td key={ planetInfo.url }>{planetInfo.url}</td>
                <td key={ planetInfo.created }>{planetInfo.created}</td>
                <td key={ planetInfo.edited }>{planetInfo.edited}</td>
              </tr>
            ))}
        </tbody>
      </table>

    </div>

  );
}

export default TabStarWar;
