import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputName() {
  const { setFilters, filters } = useContext(StarWarsContext);

  const setName = (textoBusca) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByName: { name: textoBusca },
    }));
  };

  return (
    <input
      type="text"
      name="name-filter"
      data-testid="name-filter"
      placeholder="Pesquise um planeta"
      onChange={ (e) => setName(e.target.value) }
      value={ filters.filterByName.name }
    />
  );
}

export default InputName;
