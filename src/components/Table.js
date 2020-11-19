import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import RequestPlanets from '../hooks/RequestPlanets';

function Table() {
  RequestPlanets();
  const { dataTable: { copyDataResultsTable } } = useContext(StarWarsContext);
  const arrayVoid = 0;
  if (copyDataResultsTable.length > arrayVoid) {
    const arrayKeysResults = Object.keys(copyDataResultsTable[0]);
    return (
      <table>
        <thead>
          <tr>
            {arrayKeysResults.map((header, index) => (<th key={ index }>{ header }</th>))}
          </tr>
        </thead>
        <tbody>
          {copyDataResultsTable.map((objPlanet, index1) => (
            <tr key={ index1 }>
              {arrayKeysResults.map((key, index2) => (
                <td key={ index2 }>{ objPlanet[key] }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (<span>Loading...</span>);
}

export default Table;
