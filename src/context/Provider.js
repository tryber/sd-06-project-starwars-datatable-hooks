import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider(props) { // provê infos
  const [data, setData] = useState([]); // valores, responsabilidades
  const [isFetching, setIsFetching] = useState(true);
  const [nombreProcurado, setNombreProcurado] = useState('');
  const [options, setOptions] = useState([]);
  const [filterOrder, setFilterOrder] = useState({ column: 'Name', sort: 'ASC' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const { children } = props;

  const context = { // pode ser batatinha
    data, // ok
    setData, // ok
    isFetching, // ok
    setIsFetching, // ok
    nombreProcurado, // ok
    setNombreProcurado, // ok
    options,
    setOptions,
    filterOrder, // ok
    setFilterOrder, // ok
    filterByNumericValues, // ok
    setFilterByNumericValues, // ok
  };

  return (
    // contexto é o que a gente distribui para toda a árvore de comp.
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.element.isRequired,
};
