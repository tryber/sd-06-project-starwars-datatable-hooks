import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, getData } = useContext(StarWarsContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <table>
      <tr>
        <td>
          Name
          {data.map((planet) => <tr>{ planet.name }</tr>)}
        </td>
        <td>
          Rotation Period
          {data.map((planet) => <tr>{ planet.rotation_period }</tr>)}
        </td>
        <td>
          Orbital Period
          {data.map((planet) => <tr>{ planet.orbital_period }</tr>)}
        </td>
        <td>
          Diameter
          {data.map((planet) => <tr>{ planet.diameter }</tr>)}
        </td>
        <td>
          Climate
          {data.map((planet) => <tr>{ planet.climate }</tr>)}
        </td>
        <td>
          Gravity
          {data.map((planet) => <tr>{ planet.gravity }</tr>)}
        </td>
        <td>
          Terrain
          {data.map((planet) => <tr>{ planet.terrain }</tr>)}
        </td>
        <td>
          Surface Water
          {data.map((planet) => <tr>{ planet.surface_water }</tr>)}
        </td>
        <td>
          Population
          {data.map((planet) => <tr>{ planet.population }</tr>)}
        </td>
        <td>
          Residents
          {data.map((planet) => <tr>{ planet.residents }</tr>)}
        </td>
        <td>
          Films
          {data.map((planet) => <tr>{ planet.films }</tr>)}
        </td>
        <td>
          Created
          {data.map((planet) => <tr>{ planet.created }</tr>)}
        </td>
        <td>
          Edited
          {data.map((planet) => <tr>{ planet.edited }</tr>)}
        </td>
        <td>
          URL
          {data.map((planet) => <tr>{ planet.url }</tr>)}
        </td>
      </tr>
    </table>
  );
};

export default Table;
