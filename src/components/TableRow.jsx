import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ planetValues }) {
  // operador delete, que remove a chave 'residents', já que ela não será utilizada
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
