import React from 'react';
import PlanetFilterByName from './PlanetFilterByName';
import TableBody from './TableBody';

const Table = () => (
  <div>
    <table>
      <PlanetFilterByName />
      <TableBody />
    </table>
  </div>
);

export default Table;
