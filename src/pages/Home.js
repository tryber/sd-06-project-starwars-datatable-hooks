import React, { useEffect, useContext } from 'react';
import fetchAPI from '../servises/fetchAPI';
import Header from '../components/Header';
import Table from '../components/TablePlanets';
import InputName from '../components/InputName';
import StarWarsContext from '../context/StarWarsContext';

function HomePage() {
  const { setData, setHeader } = useContext(StarWarsContext);

  useEffect(() => {
    async function fetchApiPlanets() {
      const result = await fetchAPI();
      setData(result);
      setHeader(Object.keys(result[0]));
    }
    fetchApiPlanets();
  }, [setData, setHeader]);

  return (
    <section>
      <InputName />
      <table>
        <Header />
        <Table />
      </table>
    </section>

  );
}

export default HomePage;
