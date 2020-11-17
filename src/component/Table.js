import React from 'react';

function Table() {
  const tableHeader = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url'];
  return (
    <table>
      <thead>
        <tr>
          { tableHeader.map((header) => <th key={ header }>{ header }</th>) }
        </tr>
      </thead>
    </table>
  )
}

export default Table;