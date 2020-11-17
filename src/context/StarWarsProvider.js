import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import { fetchData } from '../services/starWarsService';

//O provider agrupa a lógica do contexto
function StarWarsProvider({ children }) {
  const [data, setData] = useState([])

  const getData = async () => {
    const returnApi = await fetchData();
    setData(returnApi)
  }

  return (
    <StarWarsContext.Provider value={ { data, getData } }>
      { children }
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
