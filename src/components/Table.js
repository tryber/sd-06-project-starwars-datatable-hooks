import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import RequestPlanets from '../hooks/RequestPlanets';

function Table() {
  RequestPlanets();
  const { data } = useContext(StarWarsContext);
  const objVoid = 0;
  if (Object.keys(data).length !== objVoid) {
    const copyResults = data.results.map((result) => ({ ...result }));
    copyResults.forEach((objPlanet) => {
      delete objPlanet.residents;
    });
    const arrayKeysResults = Object.keys(copyResults[0]);
    // console.log('copyResults', copyResults)
    // console.log('results', data.results)
    return (
      <table>
        <thead>
          <tr>
            {arrayKeysResults.map((header, index) => (<th key={ index }>{ header }</th>))}
          </tr>
        </thead>
        <tbody>
          {copyResults.map((objPlanet, index1) => (
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
