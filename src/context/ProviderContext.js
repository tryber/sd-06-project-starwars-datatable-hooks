import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function ProviderContext({ children }) {
  const [data, setData] = useState({});
  const [name, setName] = useState('');

  return (
    <StarWarsContext.Provider
      value={
        {
          data,
          setData,
          filters: {
            filterByName: {
              name: name,
              setName,
            },
          } }
      }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default ProviderContext;
