import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const Body = () => {
  const {
    fetching,
    setFetching,
    planetsData,
    segundoFiltro,
    requisicaoAPI,
    filterProvider: { filters: { filterByName: { name }, filterByNumericValues } },
  } = useContext(StarWarsContext);

  // Isa Rosa me lembrou que Ícaro deu a dica que devemos chamar a useEffect
  // onde vamos usar
  // Formato de componentShoudMount?
  useEffect(() => {
    requisicaoAPI();
    setFetching(true);
    setFetching(false);
  }, [setFetching]);

  if (fetching) {
    return (<tbody><tr><td>Loading...</td></tr></tbody>);
  }
  const filtrado = segundoFiltro(planetsData, filterByNumericValues);
  return (
    <tbody>
      {filtrado
        .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
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
