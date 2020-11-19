import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputFilter() {
  const { filters, setFilters } = useContext(StarWarsContext);
  return (
    <div className="btn-group mr-2">
      <input
        className="form-control"
        data-testid="name-filter"
        id="name-filter"
        type="text"
        onChange={ ({ target }) => setFilters({
          ...filters,
          filterByName: { name: target.value },
        }) }
        value={ filters.filterByName.name }
        placeholder="Search by name"
      />
    </div>
  );
}

export default InputFilter;
