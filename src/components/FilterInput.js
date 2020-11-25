import React, { useState, useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterInput() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [filter, setFilter] = useState('');

  const filterByName = { name: filter };

  useEffect(() => {
    setFilters({ ...filters, filterByName });
  }, [filter]);

  return (
    <form>
      <label htmlFor="name-filter">
        Search
        <input
          name="name-filter"
          type="text"
          placeHolder="Enter text to filter planets"
          data-testid="name-filter"
          onChange={ (e) => setFilter(e.target.value) }
        />
      </label>
    </form>
  );
}

export default FilterInput;
