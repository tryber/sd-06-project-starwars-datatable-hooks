import React, {useContext } from 'react';
import AppContext from '../context/AppContext';

function TableRow(planetObject) {
  const { HEAD } = useContext(AppContext);
  const { name } = planetObject;
  return (
    <tr key={ name }>
      { HEAD.map((key) => (
        <td
          key={ `${key}-${name}` }
          data-testid={ key === 'name' && 'planet-name' }
        >
          { planetObject[key] }
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
