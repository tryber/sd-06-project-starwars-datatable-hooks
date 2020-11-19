import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import fetchStarWars from '../services/api';

const TableBody = () => {
  const {
    filterPlanetByName,
    planetsData,
    setPlanetsData,
    setLoading,
    loading,
  } = useContext(StarWarsContext);

  const choicePlanet = () => {
    const planetsFiltered = [...planetsData];
    return planetsFiltered;
  };

  useEffect(() => {
    setLoading(true);
    fetchStarWars().then((response) => {
      setPlanetsData(response.results);
      setLoading(false);
    });
  }, [setPlanetsData, setLoading]);

  const filterPlanet = choicePlanet(planetsData);

  const filters = filterPlanetByName.name;

  if (loading) {
    return (
      <tbody>
        <tr>
          <td>Loading...</td>
        </tr>
      </tbody>
    );
  }
  return (
    <div>
      <thead>
        <tr>
          <th>Name:</th>
          <th>Rotation Period:</th>
          <th>Orbital Period:</th>
          <th>Diameter:</th>
          <th>Gravity:</th>
          <th>Terrain:</th>
          <th>Surface Water:</th>
          <th>Population:</th>
          <th>Films:</th>
          <th>Created:</th>
          <th>Edited:</th>
          <th>URL:</th>
        </tr>
      </thead>
      <tbody>
        {filterPlanet
          .filter((planet) => planet.name.includes(filters))
          .map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </div>
  );
};

export default TableBody;
