import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const headersTitle = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
  'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'URL', 'Created',
  'Edited'];

function Table() {
  const { data, loading, searchName } = useContext(StarWarsContext);
  const [names, setNames] = useState([]);

  useEffect(() => {
    let filteredNames = data;
    const zero = 0;
    if (names.length > zero) {
      setNames(filteredNames);
    }
    filteredNames = data.filter((planet) => (
      planet.name.toLowerCase().includes(searchName.toLowerCase())
    ));
    setNames(filteredNames);
  }, [data, searchName]);

  return loading ? <div>LOADING...</div> : (
    <table>
      <thead>
        <tr>
          {headersTitle.map((header, index) => <th key={ index }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {names.map(({ name, rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod, diameter, climate, gravity, terrain,
          surface_water: surfaceWater, population, created, edited, films, url,
        }, index) => (
          <tr key={ index }>
            <td>{name}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>{films.length}</td>
            <td>{url}</td>
            <td>{created}</td>
            <td>{edited}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
