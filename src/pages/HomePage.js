import React, { useEffect, useContext } from 'react';
import starWarsAPI from '../service/starWarsAPI';
import TableBody from '../components/TableBody';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import StarWarsContext from '../context/StarWarsContext';

function HomePage() {
  const { setDataTable, setHeaders } = useContext(StarWarsContext);

  useEffect(() => {
    async function fetchData() {
      const data = await starWarsAPI();
      setDataTable(data);
      setHeaders(Object.keys(data[0]));
    }
    fetchData();
  }, [setDataTable, setHeaders]);

  return (
    <section>
      <SearchBar />
      <table>
        <Header />
        <TableBody />
      </table>
    </section>
  );
}

export default HomePage;
