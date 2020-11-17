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
  const { apiData, setApiData } = useContext(StarWarsContext);
  // useEffect(() => {
  //   (async function apiRequest() {
  //     const data = await fetchPlanets();
  //     return setApiData(data);
  //   })
  // }, [setApiData]);
  useEffect(() => {
    fetchPlanets().then((data) => setApiData(data));
  }, [setApiData]);
  const zero = 0;
  return (
    <div>
      {apiData.length === zero && <h5>Loading...</h5>}
      {apiData.length !== zero && (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )}
    </div>
  );
}

export default Table;
