import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import StarWarsAPI from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const [tableArray, setTableArray] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  // Hook equivalente ao ComponentDidMount, responsável por trazer os resultados
  // do fetch e setá-los no tableArray (meu array com todos os dados da API)
  useEffect(() => {
    async function fetchAPI() {
      const data = await StarWarsAPI();
      setTableArray(data.results);
    }
    fetchAPI();
  }, []);

  return (
    // Provider responsável por enviar para o contexto as seguintes funções.
    <StarWarsContext.Provider
      value={ {
        tableArray,
        filterByName,
        filterByNumericValues,
        setTableArray,
        setFilterByName,
        setFilterByNumericValues,
      } }
    >
      {/* Todos os elementos filhos de quem possui o provider terão acesso aos dados */}
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StarWarsProvider;
