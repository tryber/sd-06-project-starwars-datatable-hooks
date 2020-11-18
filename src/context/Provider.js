import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchData = async () => {
    setIsFetching(true);
    const response = await fetch(url);
    const responseJson = await response.json();
    setData(responseJson.results);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const context = { data, isFetching };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
