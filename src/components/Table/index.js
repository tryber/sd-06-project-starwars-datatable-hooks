import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const tableTitle = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function Table() {
  const { data, getPlanets, searchText } = useContext(StarWarsContext);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    setFilteredPlanets(data);
  }, [data]);

  useEffect(() => {
    const toFilter = data.filter((planet) => planet.name.toLowerCase()
      .includes(searchText));
    setFilteredPlanets(toFilter);
  }, [searchText]);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead className="thead-dark">
          <tr>
            {tableTitle.map((title) => (
              <th
                scope="col"
                key={ title }
                className="align-middle text-center"
              >
                {title}
              </th>))}
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.map((planet) => (
            <tr key={ planet.created }>
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
