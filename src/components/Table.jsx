import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Header from './Header';
import PlanetsTable from './PlanetsTable';

// Como só vou fazer a requisição aqui, fiz para facilitar a vida
async function fetchPlanetsAPI() {
  let data;
  try {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
    const response = await request.json();
    data = await response.results;
  } catch (error) {
    console.log(`Erro na API: ${error}`);
  }
  return data;
}

function Table() {
  const { returnAPI, setReturnAPI } = useContext(StarWarsContext);

  useEffect(() => {
    async function getPlanets() {
      const dados = await fetchPlanetsAPI();
      setReturnAPI(dados);
    }
    getPlanets();
  }, [setReturnAPI]);

  const zero = 0;
  return (
    <div>
      {returnAPI.length === zero && <h1>Loading...</h1>}
      {returnAPI.length !== zero && (
        <table>
          <Header />
          <PlanetsTable />
        </table>
      )}
    </div>
  );
}

export default Table;
