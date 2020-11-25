import React, { useContext, useEffect } from 'react';
import Tabela from '../components/Tabela';
import SWContext from '../context/SWContext';

function Home() {
  const { isFetching, getPlanetList } = useContext(SWContext);

  // hook para invocar a função que atualiza os planetas.
  useEffect(() => {
    getPlanetList();
  }, []); // [] array vazia = ComponentDidMount

  return (
    <div>
      <h1 className="header"> StarWars DataTable</h1>
      {!isFetching ? (
        <div>
          <Tabela />
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}

export default Home;
