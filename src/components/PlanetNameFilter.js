import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

// Filtro da tabela por nome através de texto
function PlanetNameFilter() {
  const { filterPlanet, setFilterPlanet } = useContext(StarWarsContext);

  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ (ev) => setFilterPlanet(ev.target.value) }
      value={ filterPlanet }
      placeholder="Planet Name"
    />
  );
}

export default PlanetNameFilter;
