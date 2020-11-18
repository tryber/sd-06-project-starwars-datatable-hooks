import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const apiEndPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  let data;
  try {
    const apiRequest = await fetch(apiEndPoint);
    const response = await apiRequest.json();
    data = await response.results;
  } catch (error) {
    console.log(error);
  }
  return data;
}

function Table() {
  const { dataApi, setDataApi } = useContext(StarWarsContext);

  useEffect(() => {
    async function getPlanets() {
      const data = await fetchPlanets();
      setDataApi(data);
    }
    getPlanets();
  }, [setDataApi]);

  const zero = 0;
  return (
    <div>
      {dataApi.length === zero && <h5>Loading...</h5>}
      {dataApi.length !== zero && (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )}
    </div>
  );
}

export default Table;
