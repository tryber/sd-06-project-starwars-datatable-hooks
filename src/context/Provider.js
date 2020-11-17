import PropTypes from 'prop-types';
import React, { useState } from 'react';
import fetchResults from '../services/api';
import StarWarsContext from './StarWarsContext';

function Provider(props) {
  const [resultsApi, setResultsApi] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async () => {
    const resultApi = await fetchResults();
    setResultsApi(resultApi);
  };

  const context = { resultsApi, getResults, searchTerm, setSearchTerm };

  const { children } = props;

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
