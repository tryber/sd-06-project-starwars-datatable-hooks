import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import SWAPIFetch from '../services/SWAPIFetch';

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState();
  const getData = async () => {
    const { results } = await SWAPIFetch('planets/');
    setData(results);
    setIsFetching(false);
  };
  // useEffect(() => {
  //   getData();
  // }, []);
  // const planetsResults = async () => {
  //   setIsFetching(true);
  //   const endpoint = 'planets/';
  //   const planetsFetch = await SWAPI(endpoint);
  //   setPlanetsInfo(planetsFetch.results);
  //   setIsFetching(false);
  //   console.log(planetsInfo);
  // };
  // if (isFetching === false && planetsInfo.length !== 0) {
  //   const dataHeaders = Object.keys(planetsResults[0])
  //     .filter((item) => item !== 'residents');
  //   console.log(dataHeaders);
  //   console.log(planetsInfo);
  // }
  const contextData = {
    data,
    setData,
    isFetching,
    setIsFetching,
    getData,
  };
  return (
    <StarWarsContext.Provider value={ contextData }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
