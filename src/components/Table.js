import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import fetchPlanetsInfo from '../services/apiServices';
import removeKeyFromObject from '../helpers/removeKeyFromObject';
import Loading from './Loading';

function Table() {
  const {
    data,
    tableHeaders,
    isFetching,
    textSearch,
    setData,
    setTableHeaders,
    setIsFetching,
    // makeInitialSetup,
    // mockedInitialSetup,
  } = useContext(StarWarsContext);

  useEffect(() => {
    const getPlanetsInfo = async () => {
      const planetsInfo = await fetchPlanetsInfo();
      const planetsWithoutResidentsKey = planetsInfo.map((planet) => (
        removeKeyFromObject(planet, 'residents')
      ));
      return planetsWithoutResidentsKey;
    };
    const makeInitialSetup = async () => {
      console.log("Retrieving API info")
      const planetsInfo = await getPlanetsInfo();
      console.log('Request response:', planetsInfo);
      setData(planetsInfo);
      setTableHeaders(Object.keys(planetsInfo[0]));
      setIsFetching(false);
    };
    makeInitialSetup();
    // mockedInitialSetup();
  }, []);

  useEffect(() => {
  }, [textSearch]);

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
