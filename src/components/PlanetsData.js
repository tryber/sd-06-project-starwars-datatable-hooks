import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsData() {
  const { planets, isFetching } = useContext(StarWarsContext);
  const keysArray = (isFetching) ? [] : Object.keys(planets[0]);
  const Loading = <div>Please, wait an instant... this galaxy is far, far away</div>;

  return (
    (isFetching) ? Loading
      : (
        <table>
          <thead>
            <tr>
              {keysArray.map((key, index) => (
                (key !== 'residents') && <th key={ index }>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planets.map((planet, index) => (
              <tr key={ index }>
                {keysArray.map((item, i) => (
                  <td key={ i }>{(item !== 'residents') && planet[item]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
  );
}

export default PlanetsData;
