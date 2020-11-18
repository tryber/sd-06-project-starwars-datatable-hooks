import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style/table.css';

function Table() {
  const { dataAPI, getData } = useContext(StarWarsContext);
  const tableHeaders = ['Name', 'Rotation Period', 'Orbital Periode',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Residents', 'Films', 'Created', 'Edited',
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <table>
      <thead>
        <tr className="table-row">
          { tableHeaders.map((title, index) => <th className="table-header" key={ `title${index}` }>{title}</th>) }
        </tr>
      </thead>
      <tbody>
        {dataAPI.map((obj, index) => {
          const tableRows = (
            <tr key={ `planet${index}` } className="table-row">
              <td>{obj.name}</td>
              <td>{obj.rotation_period}</td>
              <td>{obj.orbital_period}</td>
              <td>{obj.diameter}</td>
              <td>{obj.climate}</td>
              <td>{obj.gravity}</td>
              <td>{obj.terrain}</td>
              <td>{obj.surface_water}</td>
              <td>{obj.population}</td>
              <td>{obj.residents}</td>
              <td>{obj.films}</td>
              <td>{obj.created}</td>
              <td>{obj.edited}</td>
            </tr>
          );
          return tableRows;
        })}
      </tbody>
    </table>
  );
}

export default Table;
