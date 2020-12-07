import React, { useEffect, useContext } from 'react';
import DataContext from '../context/StarWarsContext';

function Table() {
  const { contextValue: {
    InfoPlanets, data, inputText,
    column,
    comparar,
    value,
  } } = useContext(DataContext);

  useEffect(() => {
    InfoPlanets();
  }, [InfoPlanets]);

  const dinamicFilter = () => {
    let resultFilter = data;

    comparar.forEach((comparison, index) => {
      const culumn = column[index];
      if (comparison === 'maior') {
        resultFilter = resultFilter.filter(
          (element) => parseInt(element[culumn], 10) > parseInt(value[index], 10),
        );
      }
      if (comparison === 'menor que') {
        resultFilter = resultFilter.filter(
          (element) => parseInt(element[column], 10) < parseInt(value[index], 10),
        );
      }
      if (comparison === 'igual a') {
        resultFilter = resultFilter.filter(
          (element) => parseInt(element[column], 10) === parseInt(value[index], 10),
        );
      }
    });
    return resultFilter;
  };

  return (
    <tbody>
      {dinamicFilter(data)
        .filter((element) => element.name.toUpperCase().includes(inputText.toUpperCase()))
        .map((line) => (
          <tr key={ line.name }>
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
        ))}
    </tbody>
  );
}

export default Table;
