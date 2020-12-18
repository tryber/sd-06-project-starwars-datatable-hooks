import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

export default function Table(props) {
  const { getAPI } = useContext(StarWarsContext);
  const { planets } = props;
  const columns = planets[0] && Object.keys(planets[0]);

  useEffect(() => {
    getAPI();
  }, []);

  const numberOfPlanets = 13;
  const numberOfColumns = 12;

  return (
    <table className="table">
      <thead>
        <tr>
          {planets[0] && columns.map((heading) => <th key={ heading.name }>{heading}</th>)
            .filter((place, index) => index <= numberOfColumns)}
        </tr>
      </thead>
      <tbody>
        {planets.map((row) => (
          <tr key={ columns }>
            {columns
              .map((column) => (<td key={ column.name }>{row[column]}</td>))
              .filter((place, index) => index <= numberOfPlanets)}
          </tr>))}
      </tbody>
    </table>

  );
}
Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes).isRequired,
};
