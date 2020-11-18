import React, { useContext, useEffect } from 'react';
import fetchPlanets from '../services/api';
import starContext from '../context/starContext';
import Loading from './Loading';

import '../css/Table.css';

function Table() {
  const {
    isFetching,
    setIsFetching,
    setData,
    filteredData,
    setFilteredData,
  } = useContext(starContext);

  useEffect(() => {
    const fetchData = async () => {
      const planets = await fetchPlanets();
      setData(planets);
      setFilteredData(planets);
      setIsFetching(false);
    };

    fetchData();
  }, []);

  const emptyList = 0;

  if (isFetching) {
    return <Loading />;
  }

  return (filteredData.results.length > emptyList)
    ? (
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
          { filteredData.results.map((planet) => (
            <tr key={ planet.name }>
              <td data-testid={ planet.name }>{ planet.name }</td>
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
    )
    : <p>No planets found. Please change your query.</p>;
}

export default Table;
