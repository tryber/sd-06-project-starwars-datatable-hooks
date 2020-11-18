import React from 'react';
import PropTypes from 'prop-types';

function TableHeader({ planet }) {
  const usedKeys = Object.keys(planet).filter((keys) => keys !== 'residents');

  return (
    <thead>
      <tr>
        {usedKeys.map((usedKey, index) => (
          <th key={ index }>{usedKey}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = { planet: PropTypes.objectOf().isRequired };
