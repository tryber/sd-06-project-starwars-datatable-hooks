import React, { useEffect, useContext,useState } from 'react';
import DataContext from '../context/StarWarsContext';

function Table() {
  const { contextValue: {
    InfoPlanets, data, inputText,
    column,
    comparar,
    value,
  } } = useContext(DataContext);

  const [compValue, setCompValue] = useState(''); 

  useEffect(() => {
    InfoPlanets();
  }, []);

  const filterTables = () => {
    let resultFilter = data;

    comparar.forEach((string, index) => {
      if (string === 'maior') {
        resultFilter = resultFilter.filter(
          (element) => parseInt(element[column[index]], 10) > parseInt(value[index], 10),
        );
      }
      if (string === 'menor que') {
        resultFilter = resultFilter.filter(
          (element) => parseInt(element[column[index]], 10) < parseInt(value[index], 10),
        );
      }
      if (string === 'igual a') {
        resultFilter = resultFilter.filter(
          (element) => parseInt(element[column[index]],
            10) === parseInt(value[index], 10),
        );
      }
    });
    return resultFilter;
  };

  return (
    <tbody data-testid="column-sort">
      {filterTables(data)
        .filter((element) => element.name.toUpperCase().includes(inputText.toUpperCase()))
        .map((line) => (
          <tr key={ line.name }>
            <td data-testid="planet-name">{line.name}</td>
            <td>{line.climate }</td>
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
        ))}
    </tbody>
  );
}

export default Table;
