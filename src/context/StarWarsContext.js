import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';

export const StarWarsContext = createContext();
export const Provider = ({ children }) => {
  const [fetching, setFetching] = useState(false);
  const [planetsData, setPlanetsData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState();

  const requisicaoAPI = async () => {
    await fetchPlanets().then((response) => {
      setPlanetsData(response.results);
    });
  };

  function segundoFiltro(planetsData, filterByNumericValues) {
    let planets = planetsData;
    for (let i = 0; i < filterByNumericValues.length; i += 1) {
      if (filterByNumericValues[i].comparison === 'maior que') {
        planets = planets.filter((planet) => Number(planet[filterByNumericValues[i].column])
        > Number(filterByNumericValues[i].value));
      } else if (filterByNumericValues[i].comparison === 'menor que') {
        planets = planets.filter((planet) => Number(planet[filterByNumericValues[i].column])
          < Number(filterByNumericValues[i].value));
      } else if (filterByNumericValues[i].comparison === 'igual a') {
        planets = planets.filter((planet) => Number(planet[filterByNumericValues[i].column])
          === Number(filterByNumericValues[i].value));
      }
    }
    return planets;
  }

  // Transparência: Feito com ajuda da Isa Rosa
  // Aqui só estou informando o formato
  const filterProvider = {
    filters: {
      filterByName: {
        name,
      },
    },
    filterByNumericValues: [
      {
        column,
        comparison,
        value,
      },
    ],
    // acrescentar os objetos dos outros requisitos
  };

  const context = {
    fetching,
    setFetching,
    planetsData,
    setPlanetsData,
    filterProvider,
    setName,
    setColumn,
    setComparison,
    setValue,
    segundoFiltro,
    requisicaoAPI,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
