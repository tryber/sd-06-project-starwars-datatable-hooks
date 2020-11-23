import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterForm() {
  const { setFilterName } = useContext(StarWarsContext);

  const handleFilter = () => {
    const text = document.getElementsByTagName('input')[0].value;

    setFilterName({ filters: { filterByName: { name: text } } });
  };

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilter }
      />
    </form>
  );
}

export default FilterForm;
