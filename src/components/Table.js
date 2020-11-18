import React, { useContext, useEffect } from 'react';
import TableHeader from './TableHeader';
import SearchInput from './SearchInput';
import FilterByName from './FilterByName';
import FilterHelper from '../services/FilterHelper';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { fetchAPI, willFilter } = useContext(StarWarsContext);

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <SearchInput />
      <table>
        <TableHeader />
        <tbody>
          {willFilter ? <FilterHelper /> : <FilterByName />}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
