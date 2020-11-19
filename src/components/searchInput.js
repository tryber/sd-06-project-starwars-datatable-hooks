import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchTerm() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext);
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ (event) => setSearchTerm({ filters:
        { filterByName:
          { name: event.target.value,
          },
        },
      }) }
      value={ searchTerm.filters.filterByName.name }
    />
  );
}

export default SearchTerm;
