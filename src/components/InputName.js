import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputName() {
  const { filterPlanet, setFilterPlanet } = useContext(StarWarsContext);

  const ali = (event) => {
    setFilterPlanet({ ...filterPlanet, name: event.target.value.toLowerCase() });
  };

  return (
    <label htmlFor="name planet">
      Digite o nome do planeta:
      <input
        name="name planet"
        data-testid="name-filter"
        onChange={ (e) => ali(e) }
      />
    </label>
  );
}

export default InputName;
