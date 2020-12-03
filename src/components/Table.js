import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Loading from './Loading';

function Table() {
  const {
    data,
    tableHeaders,
    isFetching,
    filters,
    makeInitialSetup,
    // mockedInitialSetup,
  } = useContext(StarWarsContext);

  const { filters: { filterByName: { name: planetName  } } } = filters;
  // troca esse name aí pra namePlanet ou algo do tipo
  // muda lá também no parâmetro de getFilteredPlanetsByUser
  
  useEffect(() => {
    makeInitialSetup();
    // mockedInitialSetup();
  }, []);

  const getFilteredPlanetsByUser = (planets, searchTerm) => (
    planets.filter((planet) => (
      planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  );

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
        {getFilteredPlanetsByUser(data, planetName).map((planet) => (
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
