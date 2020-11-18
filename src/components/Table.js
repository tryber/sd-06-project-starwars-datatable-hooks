import React, { useEffect, useState } from 'react';

export default function Table() {
  const [starwars, setStarWars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await resp.json();

      setStarWars(data.results);
    }

    fetchData();
  }, []);

  return (
    <div>
      <table className="table table-dark">
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Orbital_period</th>
          <th>Population</th>
          {/* <th>Residents</th> */}
          <th>Rotation_period</th>
          <th>Surface_water</th>
          <th>Terrain</th>
          <th>URL</th>
        </tr>

        {starwars.map((e) => (
          <tr key={ starwars.indexOf() }>
            <td>{e.name}</td>
            <td>{e.climate}</td>
            <td>{e.created}</td>
            <td>{e.diameter}</td>
            <td>{e.edited}</td>
            <td>{e.films.map((film) => <p key={ film.indexOf() }>{film}</p>)}</td>
            <td>{e.gravity}</td>
            <td>{e.orbital_period}</td>
            <td>{e.population}</td>
            {/* <td>{e.residents.map(e => <p>{e}</p>)}</td> */}
            <td>{e.rotation_period}</td>
            <td>{e.surface_water}</td>
            <td>{e.terrain}</td>
            <td>{e.url}</td>
          </tr>
        ))}

      </table>
    </div>
  );
}
