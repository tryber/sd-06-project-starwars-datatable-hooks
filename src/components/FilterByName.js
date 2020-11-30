import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByName() {
  const {
    filters: { filterByName: { name } },
    setFilterByName,
  } = useContext(StarWarsContext);

  return (
    <section className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        Search for planet:
      </span>
      <input
        className="form-control mr-sm-2"
        data-testid="name-filter"
        type="text"
        name="name-filter"
        onChange={ (ev) => setFilterByName(ev.target.value) }
        value={ name }
      />
    </section>
  );
}

export default FilterByName;
