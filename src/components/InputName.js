import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputName() {
  const {
    filtersProvider:
      { filters:
        { filterByName:
          { name },
        },
      }, setName } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      name="name-filter"
      data-testid="name-filter"
      placeholder="Pesquise um planeta"
      onChange={ (e) => setName(e.target.value) }
      value={ name }
    />
  );
}

export default InputName;
