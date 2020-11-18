import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    filteredData,
    filters,
    filterByName,
    filterByNumericValues,
  } = useContext(StarWarsContext);

  useEffect(() => {
    filterByName();
    if (filters.filterByNumericValues) {
      filterByNumericValues();
    }
  }, [filters]);

  const renderPlanet = (planet) => Object.entries(planet).map(([key, value]) => {
    if (key !== 'residents') {
      return <td key={ key }>{value}</td>;
    }
    return null;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((planet) => (
          <tr key={ planet.name }>{renderPlanet(planet)}</tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
