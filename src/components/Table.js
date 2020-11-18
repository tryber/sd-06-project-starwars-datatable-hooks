import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    planets,
    getPlanets,
    searchTerm,
    filteredByNumber,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets();
  }, []);

  function numericFilter(allPlanets) {
    let resp = [];
    const ZERO = 0;
    if (filteredByNumber.length === ZERO) return allPlanets;

    const tudo = filteredByNumber.map((number) => {
      if (number.comparison === 'maior que') {
        resp = [...resp, allPlanets.filter((planet) => (
          (number.value < parseInt(planet[number.column], 10))))];
        // console.log(resp);
        // return resp;
      }
      if (number.comparison === 'menor que') {
        resp = [...resp, allPlanets.filter((planet) => (
          (number.value > parseInt(planet[number.column], 10))))];
        // console.log(resp);
        // return resp;
      }
      if (number.comparison === 'igual a') {
        resp = [...resp, allPlanets.filter((planet) => (
          (number.value === planet[number.column])))];
        // console.log(resp);
        // return resp;
      }
      console.log(resp);
      return resp[0];
    });
    const final = tudo[0];
    console.log(final);
    return final;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">rotation_period</th>
          <th scope="col">orbital_period</th>
          <th scope="col">diameter</th>
          <th scope="col">climate</th>
          <th scope="col">gravity</th>
          <th scope="col">terrain</th>
          <th scope="col">surface_water</th>
          <th scope="col">population</th>
          <th scope="col">films</th>
          <th scope="col">created</th>
          <th scope="col">edited</th>
          <th scope="col">url</th>
        </tr>
      </thead>
      <tbody>
        {numericFilter(planets)
          .filter((planet) => planet.name
            .includes(searchTerm.filters.filterByName.name))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
