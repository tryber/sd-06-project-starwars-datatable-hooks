import React from 'react';

import StarWarsProvider from './Context/StarWarsProvider';

import TableInformatio from './components/Table/';

function Table() {
  return (
    <div>
      <StarWarsProvider>
        <TableInformatio />
      </StarWarsProvider>
    </div>
  );
}

export default Table;
