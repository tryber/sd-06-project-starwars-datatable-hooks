import React, { useEffect, useContext } from 'react';
import DataContext from '../context/DataContext';

function Table() {
  const { contextValue: { getInfoPlanets, data, inputText,
    columnFilter, 
    comparisonFilter, 
    valueFilter, 
     } } = useContext(DataContext);

  useEffect(() => {
    getInfoPlanets();
  }, []);

  const dinamicFilter = (data) => {
    let resultFilter = data;
    comparisonFilter.forEach((comparison, index) => {
      if (comparison === 'maior') {
        resultFilter = resultFilter.filter(element => parseInt(element[columnFilter[index]], 10) > parseInt(valueFilter[index], 10))
      } else if (comparison === 'menor que') {
        resultFilter = resultFilter.filter(element => parseInt(element[columnFilter[index]], 10) < parseInt(valueFilter[index], 10))
      } else if (comparison === 'igual a') {
        resultFilter = resultFilter.filter(element => parseInt(element[columnFilter[index]], 10) === parseInt(valueFilter[index], 10))
      }
    })
    return resultFilter;
  }

  return (
    <tbody>
      {dinamicFilter(data)
      .filter(element => element.name.toUpperCase().includes(inputText.toUpperCase()))
      .map((line) => {
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
