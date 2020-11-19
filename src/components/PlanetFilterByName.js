import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const PlanetFilterByName = () => {
  const { filterPlanetByName, setFilterPlanetByName } = useContext(StarWarsContext);
  return (
    <input
      data-testid="name-filter"
      placeholder="filter planet by name"
      onChange={ (event) => setFilterPlanetByName({
        ...filterPlanetByName, name: event.target.value }) }
    />
  );
};

export default PlanetFilterByName;
