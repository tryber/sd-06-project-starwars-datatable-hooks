import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import handleFilterByNumber from '../services/handleFilterByNumber';
import sortByColumn from '../services/sortByColumn';

export default function Table() {
  const { planets,
    filters,
    setFilters,
    arrFilters,
    setArrFilters,
    deletedFilters,
    setDeletedFilters } = useContext(StarWarsContext);

  useEffect(() => {
    handleFilterByNumber(planets,
      filters.filterByNumericValues);
  }, [planets, filters, deletedFilters]);

  function handleDelete(event) {
    const filtro = event.target.id.toString();
    setDeletedFilters([deletedFilters.filter((elemento) => elemento !== filtro)]);
    setArrFilters([...arrFilters, filtro]);
    setFilters({
      filterByName: filters.filterByName,
      filterByNumericValues: filters.filterByNumericValues
        .filter((obj) => obj.column !== filtro),
      order: filters.order,
    });
  }

  const magicZero = 0;

  return (
    <div>
      <span>
        Remover filtros:
      </span>
      { deletedFilters.length > magicZero && deletedFilters.map((element) => (
        <div
          key={ element }
          data-testid="filter"
        >
          { element }
          <button
            type="button"
            onClick={ handleDelete }
            id={ element }
          >
            X
          </button>
        </div>))}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation_period</th>
            <th>Orbital_period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { sortByColumn(
            handleFilterByNumber(planets, filters.filterByNumericValues), filters.order,
          )
            .filter((planet) => planet.name.includes(filters.filterByName.name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{ planet.name }</td>
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
            ))}
        </tbody>
      </table>
    </div>
  );
}
