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
          {data.map((planet, i) => <tr key={ i }>{ planet.name }</tr>)}
        </td>
        <td>
          Rotation Period
          {data.map((planet, i) => <tr key={ i }>{ planet.rotation_period }</tr>)}
        </td>
        <td>
          Orbital Period
          {data.map((planet, i) => <tr key={ i }>{ planet.orbital_period }</tr>)}
        </td>
        <td>
          Diameter
          {data.map((planet, i) => <tr key={ i }>{ planet.diameter }</tr>)}
        </td>
        <td>
          Climate
          {data.map((planet, i) => <tr key={ i }>{ planet.climate }</tr>)}
        </td>
        <td>
          Gravity
          {data.map((planet, i) => <tr key={ i }>{ planet.gravity }</tr>)}
        </td>
        <td>
          Terrain
          {data.map((planet, i) => <tr key={ i }>{ planet.terrain }</tr>)}
        </td>
        <td>
          Surface Water
          {data.map((planet, i) => <tr key={ i }>{ planet.surface_water }</tr>)}
        </td>
        <td>
          Population
          {data.map((planet, i) => <tr key={ i }>{ planet.population }</tr>)}
        </td>
        <td>
          Residents
          {data.map((planet, i) => <tr key={ i }>{ planet.residents }</tr>)}
        </td>
        <td>
          Films
          {data.map((planet, i) => <tr key={ i }>{ planet.films }</tr>)}
        </td>
        <td>
          Created
          {data.map((planet, i) => <tr key={ i }>{ planet.created }</tr>)}
        </td>
        <td>
          Edited
          {data.map((planet, i) => <tr key={ i }>{ planet.edited }</tr>)}
        </td>
        <td>
          URL
          {data.map((planet, i) => <tr key={ i }>{ planet.url }</tr>)}
        </td>
      </tr>
    </table>
  );
}

export default Table;
