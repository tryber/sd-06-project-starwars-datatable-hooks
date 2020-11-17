import React, { useContext } from 'react';
import JobContext from '../context/JobContext';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(JobContext);

  return (
    <input
      type="text"
      name="search"
      id="search"
      onChange={ (ev) => setSearchTerm(ev.target.value) }
      value={ searchTerm }
    />
  );
}

export default SearchInput;
