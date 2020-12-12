import React, { useContext, useEffect } from 'react';
import DataContext from '../context/DataContext';
import THeader from './THeader';
import TBody from './TBody';

async function fetchPlanets() {
  const apiEndPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  let data;
  try {
    const apiRequest = await fetch(apiEndPoint);
    const response = await apiRequest.json();
    data = await response.results;
  } catch (error) {
    console.log(error.message);
  }
  return data;
}

function Table() {
  const { dataApi, setDataApi } = useContext(DataContext);

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
          <THeader />
          <TBody />
        </table>
      )}
    </div>
  );
}

export default Table;
