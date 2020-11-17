import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({
    column: 'Name',
    sort: 'ASC',
  });
  const [ordenar, setOrdenar] = useState(true);
  const orderFunction = (ordem, coluna) => setOrder((estadoAtual) => ({
    ...estadoAtual,
    sort: ordem,
    column: coluna,
  }));

  const byNumericValuesFunction = (valor) => setFilterByNumericValues(
    (estado) => [...estado, valor],
  );

  const context = {
    isFetching,
    setIsFetching,
    planets,
    setPlanets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    byNumericValuesFunction,
    order,
    orderFunction,
    ordenar,
    setOrdenar,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
