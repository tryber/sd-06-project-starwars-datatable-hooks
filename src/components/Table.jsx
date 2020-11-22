import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import fetchApi from '../ApiData/fetchApi';

function Table() {
  const number = 0;
  const {
    data,
    setData,
    filters: { filters: { filterByName: { name } } },
  } = useContext(StarWarsContext);

  const getResponse = async () => {
    const objData = await fetchApi();
    setData(objData);
  };

  useEffect(() => {
    getResponse();
  }, []);

  if (data.length > number) {
    return (
      <table className="table">
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
        {
          data
            .filter((eachPlanet) => eachPlanet.name.toUpperCase()
              .includes(name.toUpperCase()))
            .map((planet) => (
              <tbody key={ planet.name }>
                <tr>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>
                    {planet.films.map((film, index) => <li key={ index }>{film}</li>)}
                  </td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              </tbody>
            ))
        }
      </table>
    );
  }
  return <p>Loading...</p>;
}

export default Table;
