import React, { useContext, useEffect } from 'react';

import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/Table';
import FiltersInput from '../components/FiltersInput';
import './Home.css';

function Home() {
  const { isFetching, getPlanetList } = useContext(StarWarsContext);

  // hook para invocar a função que atualiza os planetas.
  useEffect(() => {
    getPlanetList();
  }, []); // [] array vazia = ComponentDidMount

  return (
    <div>
      <h1 className="header"> StarWars DataTable</h1>
      {!isFetching ? (
        <div>
          <FiltersInput />
          <Table />
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}

export default Home;
