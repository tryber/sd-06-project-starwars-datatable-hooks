import React, { useEffect, useContext } from 'react';
import DataContext from '../context/DataContext';

function Table() {
  const { contextValue: { getInfoPlanets, result } } = useContext(DataContext);

  useEffect(() => {
    getInfoPlanets();
  }, []);

  return (
    <tbody>
      {result.map((line) => {
        return (
          <tr key={line.name} >
            <td>{line.name}</td>
            <td>{line.climate}</td>
            <td>{line.diameter}</td>
            <td>{line.edited}</td>
            <td>{line.films}</td>
            <td>{line.gravity}</td>
            <td>{line.orbital_period}</td>
            <td>{line.population}</td>
            <td>{line.rotation_period}</td>
            <td>{line.surface_water}</td>
            <td>{line.terrain}</td>
            <td>{line.created}</td>
            <td>{line.url}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default Table;
