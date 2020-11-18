import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NameFilter() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const nameToFilter = filters.filters.filterByName.name;
  const onChange = ({ target }) => {
    const typingName = target.value;
    setFilters({
      ...filters,
      filters: {
        filterByName: {
          name: typingName,
        },
      },
    });
  };
  return (
    <input
      value={ nameToFilter }
      onChange={ onChange }
      data-testid="name-filter"
      type="text"
    />
  );
}

export default NameFilter;
