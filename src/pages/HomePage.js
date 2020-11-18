import React, { useEffect, useContext } from 'react';
import starWarsAPI from '../service/starWarsAPI';
import TableBody from '../components/TableBody';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import StarWarsContext from '../context/StarWarsContext';
import FilterList from '../components/FilterList';

function HomePage() {
  const { setDataTable, setHeaders, setLoading } = useContext(StarWarsContext);

  const getPlanets = async () => {
    const data = await starWarsAPI();
    setDataTable(data);
    setHeaders(Object.keys(data[0]));
    setLoading(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <section>
      <SearchBar />
      <FilterList />
      <table>
        <Header />
        <TableBody />
      </table>
    </section>
  );
}

export default HomePage;
