import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../ApiContext';
import fetchPlanets from '../../services/fetchPlanets';

function ApiProvider({ children }) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchAndSavePlanets = async () => {
      const data = await fetchPlanets();
      console.log(data);

      setApiData(data);
    };
    fetchAndSavePlanets();
  }, [setApiData]);

  const context = {
    apiData,
  };

  return (
    <ApiContext.Provider value={ context }>
      { children }
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ApiProvider;
