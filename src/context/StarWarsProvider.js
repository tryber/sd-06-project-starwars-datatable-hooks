import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import Table from '../components/Table';

function StarWarsProvider() {
  const [planets, setPlanets] = useState([]);

  const serviceAPI = async () => {
    const responseAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await responseAPI.json();

    return setPlanets(json.results);
  };

  return (
    <StarWarsContext.Provider value={ { planets, serviceAPI } }>
      { () => <Table /> }
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
