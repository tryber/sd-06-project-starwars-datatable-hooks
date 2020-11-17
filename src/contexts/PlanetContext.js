import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
// uuid from this tutorial https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI
import { v4 as uuidv4 } from 'uuid';

export const PlanetContext = createContext();

const PlanetContextProvider = (props) => {
  const [planets] = useState([
    { name: 'Tattoine', id: uuidv4() },
  ]);
  const { children } = props;
  return (
    <PlanetContext.Provider value={ { planets } }>
      {children}
    </PlanetContext.Provider>
  );
};

export default PlanetContextProvider;

PlanetContextProvider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};
