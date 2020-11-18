import React, {  } from 'react';
import PropTypes from 'prop-types';

function TableHeader({ keys }) {
  const usedKeys = keys.filter((key) => key !== 'residents');
  return (
    <thead>
      <tr>
        {usedKeys.map((key, index) => (
          <th key={ index }>
            { key }
          </th>
        ))
        }
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = { keys: PropTypes.string.isRequired }