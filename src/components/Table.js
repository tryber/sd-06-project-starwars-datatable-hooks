import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ data: planets }) => {
  // const columns = Object.keys(planets[0]).filter((key) => key !== 'residents');
  const columns = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
  ];

  return (
    <table>
      <thead>
        <tr>
          { columns.map((col, index) => (<th key={ index }>{ col }</th>)) }
        </tr>
      </thead>
      <tbody>
        {
          planets.map((planet, index) => (
            <tr key={ index }>
              {
                columns.map((cat, i) => (
                  <td key={ i }>{ planet[cat.toLocaleLowerCase()] }</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default Table;
