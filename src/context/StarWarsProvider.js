import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [text, setText] = useState('');

  const serviceAPI = async () => {
    const responseAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await responseAPI.json();

    return setPlanets(json.results);
  };

  useEffect(() => {
    serviceAPI();
  }, []);

  return (
    <StarWarsContext.Provider value={ { planets, setText, text } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default StarWarsProvider;
