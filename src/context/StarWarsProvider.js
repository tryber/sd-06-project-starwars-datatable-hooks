import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';

function SWProvider({ children }) {
  const [data, setData] = useState([]);

  const getApiPlanets = async () => {
    const responseApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const dados = await responseApi.json();
    const planets = await dados.results
      .map((item) => {
        delete item.residents;
        return item;
      });
    setData(planets);
  };

  const teste = 'teste';

  return (
    <StarWarsContext.Provider value={ teste }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default SWProvider;
