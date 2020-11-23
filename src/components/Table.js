import React, { useState, useEffect } from 'react';
import sWAPI from '../services/sWAPI';
import { Filter } from '.';

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
    'rotation_period',
    'surface_water',
    'terrain',
    'url',
  ];
  const headElement = () => HEAD.map((e, index) => (
    <th key={ `${e}-${index}` }>{ e }</th>));

  const rowElement = (planet) => (
    <tr>
      { HEAD.map((key, index) => (
        <td key={ `${key}-${index}-${planet}` }>
          { planet[key] }
        </td>
      ))}
    </tr>);

  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilter] = useState([]);

  const PLANETS_FROM_API = async () => {
    const RESULT = await sWAPI();
    return setPlanets(RESULT.results);
  };

  useEffect(() => {
    PLANETS_FROM_API();
  }, []);

  const ZERO = 0;
  return (
    <div>
      <Filter
        filteredPlanets={ filteredPlanets }
        setFilter={ setFilter }
        planets={ planets }
      />
      <table>
        <thead>
          <tr>
            { headElement() }
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.length !== ZERO
            ? filteredPlanets.map((planet) => rowElement(planet))
            : planets.map((planet) => rowElement(planet))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
