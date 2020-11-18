import React, { useContext } from 'react';
import StarWarsContext from './context/StarWarsContext';

function NovoTetse() {
  const { stateTest, setStateTest } = useContext(StarWarsContext);
  return (
    <div>
      <h1>Novo Componente</h1>
      <p>{`valor: ${stateTest}`}</p>
      <button type="button" onClick={ () => setStateTest('olá') }>Clique</button>
    </div>
  );
}

export default NovoTetse;
