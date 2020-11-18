import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SearchInput = () => {
  const { search, setSearch } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        data-testid= "name-filter"
        onChange={ (event) => setSearch(event.target.value) }
        value={ search }
      />
    </div>
  );
};

export default SearchInput;
