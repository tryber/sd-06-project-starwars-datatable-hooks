import React, { useState } from 'react';

// o Provider irá prover os dados para os componentes abaixo dele ({ children})
// na árvore de componentes;
import StarWarsContext from './StarWarsContext';

// armazenando os dados: lista de planetas. Cria-se uma variável no estado em um
// componente funcional através do useState();
const [prismPlanets, setPrismPlanets] = useState([]);

function StarWarsProvider({ children }) {
  return (
    <StarWarsContext.Provider value={ { prismPlanets } }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
