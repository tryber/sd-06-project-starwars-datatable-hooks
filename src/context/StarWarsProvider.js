import React from 'react';

// o Provider irá prover os dados para os componentes abaixo dele ({ children})
// na árvore de componentes;
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  return (
    <StarWarsContext.Provider value={ {} }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
