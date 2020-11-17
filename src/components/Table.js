import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, getPlanetsData } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StarWarsContext.Consumer>
      {() => (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {data.map((planet, i) => (
                <th key={ i } scope="col">{planet.name}</th>
              ))}
              {console.log(data)}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      )}
    </StarWarsContext.Consumer>
  );
}

export default Table;
