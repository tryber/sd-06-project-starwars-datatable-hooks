import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';
import PlanetsTableBody from './PlanetsTableBody';

function PlanetsTable() {
  const { planets, tableHeaders } = useContext(StarWarsContext);

  return (
    <main>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => <th key={ header }>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          <PlanetsTableBody planets={ planets } tableHeaders={ tableHeaders } />
        </tbody>
      </table>
    </main>
  );
}

export default PlanetsTable;
