import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import Planet from './Planet';

export default function Table() {
  const { getAPI, planets, filters } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  const columns = planets[0] && Object.keys(planets[0]);

  useEffect(() => {
    getAPI();
  }, []);

  const numberOfColumns = 12;

  const filteredPlanets = planets.filter((planet) => planet.name.includes(name));

  return (
    <table className="table">
      <thead>
        <tr>
          {planets[0] && columns.map((heading) => <th key={ heading.name }>{heading}</th>)
            .filter((place, index) => index <= numberOfColumns)}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet) => (<Planet planet={ planet } />))}
      </tbody>
    </table>

  );
}
Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes).isRequired,
};
