import React from 'react';
import PlanetFilterByName from './PlanetFilterByName';
import TableBody from './TableBody';
import PlanetFilterByNumber from './PlanetFilterByNumber';

const Table = () => (
  <div>
    <h1>SD-06-PROJECT-STAR WARS - DATA TABLE - HOOKS</h1>
    <div>
      <PlanetFilterByNumber />
    </div>
    <PlanetFilterByName />
    <table>
      <TableBody />
    </table>
  </div>
);

export default Table;
