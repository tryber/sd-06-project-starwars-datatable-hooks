import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import sWAPI from '../services/sWAPI';
import Filter from './Filter';

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
  const ZERO = 0;

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

  const { planets, setPlanets, name, filteredPlanets } = useContext(AppContext);

  const PLANETS_FROM_API = async () => {
    const RESULT = await sWAPI();
    return setPlanets(RESULT.results);
  };

  const tableFilterStructure = () => (
    filteredPlanets.length > ZERO
      ? filteredPlanets.map((planet) => rowElement(planet))
      : planets.filter((planet) => planet.name.includes(name))
        .map((planet) => rowElement(planet))
  );

  useEffect(() => {
    PLANETS_FROM_API();
  }, []);

  return (
    <div>
      <Filter />
      {planets.length !== ZERO
        ? (
          <table>
            <thead>
              <tr>
                { headElement() }
              </tr>
            </thead>
            <tbody>
              {tableFilterStructure()}
            </tbody>
          </table>
        )
        : <h1>Loading</h1>}
    </div>
  );
}

export default Table;
