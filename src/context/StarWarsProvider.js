import React, { useState } from 'react';
import starWarsContext from './starWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <starWarsContext.Provider value={ { data } }>
      { children }
    </starWarsContext.Provider>
  );
}

export default StarWarsProvider;
