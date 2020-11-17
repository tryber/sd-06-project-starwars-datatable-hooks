import React, { useState, useEffect } from 'react';

import fetchPlanets from '../services/api';
import Loading from './Loading';
import '../css/Table.css';

function Table() {
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const planets = await fetchPlanets();
      setData(planets);
      setIsFetching(false);
    };

    fetchData();
  }, []);

  return (isFetching)
    ? <Loading />
    : (
      <table className="planetsTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Residents</th>
            <th>Films</th>
            <th>Created</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { data.results.map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.residents }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.url }</td>
            </tr>
          )) }
        </tbody>
      </table>
    );
}

export default Table;
