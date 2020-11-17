import React from 'react';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  return (
    <StarWarsContext.Provider>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;