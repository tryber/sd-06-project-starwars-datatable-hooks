import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import fetchPlanets from '../services/api';

const Body = () => {
  const {
    planetsData, setPlanetsData, fetching, setFetching, filterByName,
  } = useContext(StarWarsContext);

  // Isa Rosa me lembrou que Ícaro deu a dica que devemos chamar a useEffect
  // onde vamos usar
  useEffect(() => {
    setFetching(true);
    fetchPlanets().then((response) => {
      setPlanetsData(response.results);
      setFetching(false);
    });
  }, [setPlanetsData, setFetching]);

  const filters = filterByName.name;
  if (fetching) {
    return (<tbody><tr><td>Loading...</td></tr></tbody>);
  }
  return (
    <tbody>
      {planetsData
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
  );
};

export default Body;
