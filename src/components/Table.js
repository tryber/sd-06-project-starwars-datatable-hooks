import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, setData } = useContext(StarWarsContext);
  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsFetch = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await planetsFetch.json();
      const { results } = response;
      setData(results);
    };
    fetchPlanets();
  }, []);
  return (
    <div>
      <table>
        <colgroup span="4" className="columns" />
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films Qt</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={ p.name }>
              <td>{p.name}</td>
              <td>{p.rotation_period}</td>
              <td>{p.orbital_period}</td>
              <td>{p.diameter}</td>
              <td>{p.climate}</td>
              <td>{p.gravity}</td>
              <td>{p.terrain}</td>
              <td>{p.surface_water}</td>
              <td>{p.population}</td>
              <td>{p.films}</td>
              <td>{p.created}</td>
              <td>{p.edited}</td>
              <td>{p.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
