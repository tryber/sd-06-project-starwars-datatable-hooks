import React, { useState } from 'react';
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

  // Essa função recebe o resultado que veio da requisição e eu passo ela logo abaixo
  // no value do provider
  const getResults = async () => {
    setApiRequest(await fetchAPI());
  };

  // agora eu compartilho os dados com os componentes filhos (ou filho ? (≖_≖ ) )
  return (
    // como value eu passo a variável ApiRequest que contém a resposta da requisição
    // para que assim eu consiga compartilhar os dados que vierem com os componentes filhos
    <StarWarsContext.Provider value={ { ApiRequest, getResults } }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
