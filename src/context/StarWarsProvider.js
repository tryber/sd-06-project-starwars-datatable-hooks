import React, { useState } from 'react';
import fetchPlanetsInfo from '../services/apiServices';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider(props) {
  const [ data, setData ] = useState([]);

  const getPlanetsInfo = async () => {
    const planetsInfo = await fetchPlanetsInfo();
    setData(planetsInfo);
  };

  const contextValue = {
    data,
    getPlanetsInfo,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { props.children }
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
