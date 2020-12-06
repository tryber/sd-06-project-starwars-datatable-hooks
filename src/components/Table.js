import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Loading from './Loading';

function Table() {
  const {
    tableHeaders,
    isFetching,
    makeInitialSetup,
    getFilteredPlanets,
    // mockedInitialSetup,
  } = useContext(StarWarsContext);

  useEffect(() => {
    makeInitialSetup();
    // mockedInitialSetup();
  }, []);

  const renderTable = () => (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders.map((tableHeader, index) => (
            <th key={ index } scope="col">{ tableHeader }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {getFilteredPlanets().map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((planetValue, index) => (
              <td key={ index }>{ planetValue }</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      { isFetching ? <Loading /> : renderTable()}
    </div>
  );
}

export default Table;
