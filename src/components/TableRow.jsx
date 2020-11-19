import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ planetValues }) {
  delete planetValues.residents;

  return (
    <tr>
      {Object.values(planetValues).map((planetValue, index) => (
        <td key={ index }>
          { planetValue }
        </td>
      ))}
    </tr>
  );
}

export default TableRow;

TableRow.propTypes = {
  planetValues: PropTypes.objectOf().isRequired,
};
