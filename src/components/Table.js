import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

function Table() {
  const { data } = useContext(starWarsContext);

  return (
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Residents</th>
          <th>Films</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => (
          <tr key={ index }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.residents }</td>
            <td>{ planet.films }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

// <table>
// <thead>
//   <tr>
//     <th>Descrição</th>
//     <th>Tag</th>
//     <th>Método de pagamento</th>
//     <th>Valor</th>
//     <th>Moeda</th>
//     <th>Câmbio utilizado</th>
//     <th>Valor convertido</th>
//     <th>Moeda de conversão</th>
//     <th>Editar/Excluir</th>
//   </tr>
// </thead>
// <tbody>

// name": "Dagobah",
//             "rotation_period": "23",
//             "orbital_period": "341",
//             "diameter": "8900",
//             "climate": "murky",
//             "gravity": "N/A",
//             "terrain": "swamp, jungles",
//             "surface_water": "8",
//             "population": "unknown",
//             "residents": [],
//             "films": [

//   <table>
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Rotation Period</th>
//       <th>Orbital Period</th>
//       <th>Climate</th>
//       <th>Gravity</th>
//       <th>Terrain</th>
//       <th>Surface Water</th>
//       <th>Population</th>
//       <th>Residents</th>
//       <th>Films</th>

//     </tr>
//   </thead>
// </table>
