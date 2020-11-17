import React from 'react';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState();
  const contextState = {
    stateA,
    setStateA,
  };

  return (
    <StarWarsContext.Provider value={ contextState }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired, // Is correct?
};

export default Provider;
