import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { filteredName, setFilteredName } = useContext(StarWarsContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilteredName(value);
    console.log(filteredName);
  };

  return (
    <div>
      <input
        name="searchTerm"
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        value={ filteredName }
      />
    </div>
  );
}

export default SearchInput;
