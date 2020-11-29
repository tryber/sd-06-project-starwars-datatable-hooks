import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { Loading } from '../components';

function Table() {
  const {
    data,
    tableHeaders,
    isFetching,
    textSearch,
    //makeInitialSetup,
    mockedInitialSetup,
  } = useContext(StarWarsContext);

  useEffect(() => {
    mockedInitialSetup();
    //makeInitialSetup();
  }, []);

  useEffect(() => {
  }, [textSearch]);

  const getFilteredPlanetsByUser = (planets, searchTerm) => {
    return planets.filter((planet) => (
      planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  };

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
        {getFilteredPlanetsByUser(data, textSearch).map((planet) => (
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
