import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchByName() {
  const { data, filteredName, setFilteredName } = useContext(StarWarsContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilteredName(value);
  };

  return !data ? <h1>Loading...</h1>
    : (
      <div>
        <label htmlFor="name-filter">
          Nome:
          <input
            name="searchTerm"
            id="name-filter"
            type="text"
            data-testid="name-filter"
            onChange={ handleChange }
            value={ filteredName }
          />
        </label>
      </div>
    );
}

export default SearchByName;
