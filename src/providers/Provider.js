import React, { useEffect, useState } from 'react';
// importo React pois um provider sempre será um componente e
// o contexto, que será utilizado no provider

// propTypes
import PropTypes from 'prop-types';

// importo o contexto que foi criado
import StarWarsContext from '../context/StarWarsContext';

// minha função que recebe uma url e faz a requisição a API
import fetchAPI from '../services/fetchAPI';

function Provider({ children }) {
  // aqui vem as props que eu vou compartilhar com meus componentes

  // setApiRequest insere o valor retornado da requisição dentro de ApiRequest
  // ApiRequest recebe o retorno da requisição da API
  const [ApiRequest, setApiRequest] = useState([]);

  // Aqui eu faço a requisição, pego a resposta e coloco dentro da variável ApiRequest
  // depois passo ela no value do provider
  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await fetchAPI();
      setApiRequest(data.results);
    };

    fetchPlanets();
  }, []);

  // aqui eu agrupo todos os values que pretendo prover
  const context = {
    ApiRequest,
  };

  // agora eu compartilho os dados com os componentes filhos (ou filho ? (≖_≖ ) )
  return (
    // como value eu passo o context que é um objeto que contém os valores que serão compartilhados
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
