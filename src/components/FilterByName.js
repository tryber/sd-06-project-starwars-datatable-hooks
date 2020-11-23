import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByName() {
  const {
    filters: { filterByName: { name } },
    setFilterByName,
  } = useContext(StarWarsContext);

  return (
    <section className="filters">
      <label htmlFor="name-filter">
        Search for planet:
        <input
          data-testid="name-filter"
          type="text"
          id="name-filter"
          name="name-filter"
          onChange={ (ev) => setFilterByName(ev.target.value) }
          value={ name }
        />
      </label>
    </section>
  );
}

export default FilterByName;
