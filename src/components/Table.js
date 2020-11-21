import React, { useState } from 'react';
import AppContext from '../context/AppContext';
import sWAPI from '../services/sWAPI';

function Table() {
  const HEAD = [
    'name',
    'diameter',
    'climate',
    'created',
    'edited',
    'films',
    'gravity',
    'orbital_period',
    'population',
    'residents',
    'rotation_period',
    'surface_water',
    'terrain',
  ];
  const headElement = () => {
    return HEAD.map((e) => (
      <th key={ e }>
        { e }
      </th>));
  };
  const rowElement = (planet) => {
    return (
      <tr>
        { HEAD.map((key, index) => (
          <td key={ `${key}-${index}` }>
            { planet[key] }
          </td>
        ))}
      </tr>);
  };

  const [planets, setPlanets] = useState([]);

  const PLANETS_FROM_API = async () => {
    const RESULT = await sWAPI();
    return setPlanets(RESULT.results);
  };

  PLANETS_FROM_API();

  return (
    <table>
      <tr>
        { headElement() }
      </tr>
      {planets.map((planet) => rowElement(planet))}
    </table>
  );
}

export default Table;
