import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import StarWarsAPI from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const [tableArray, setTableArray] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    async function fetchAPI() {
      const data = await StarWarsAPI();
      setTableArray(data.results);
    }
    fetchAPI();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        tableArray,
        filterByName,
        setTableArray,
        setFilterByName,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StarWarsProvider;
