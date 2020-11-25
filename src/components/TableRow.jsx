import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ planetValues }) {
  return (
    <tr>
      {Object.values(planetValues).map((planetValue, index) => {
        if (!index) {
          return (
            <td data-testid="planet-name" key={ index }>
              { planetValue }
            </td>
          );
        }
        return (
          <td key={ index }>
            { planetValue }
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;

TableRow.propTypes = {
  planetValues: PropTypes.shape({
    residents: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
