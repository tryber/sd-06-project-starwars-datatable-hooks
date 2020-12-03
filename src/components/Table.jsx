import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function StarWarsTable() {
  const {
    data,
    dataApi,
    searchTerm,
  } = useContext(StarWarsContext);

  const byValue = searchTerm.filters.filterByNumericValues;
  useEffect(() => { // componentWillMount()
    dataApi();
  }, []);

  // console.log(data);
  function masterFilter() {
    let initialArray = data;
    const magicNumber = 0;
    if (byValue.length === magicNumber) return data;

    byValue.forEach((element) => {
      if (element.comparison === 'maior que') {
        initialArray = initialArray.filter((dataElement) => (
          (element.value < parseInt(dataElement[element.column], 10))));
      }
      if (element.comparison === 'menor que') {
        initialArray = initialArray.filter((dataElement) => (
          (element.value > parseInt(dataElement[element.column], 10))));
      }
      if (element.comparison === 'igual a') {
        initialArray = initialArray.filter((dataElement) => (
          (element.value === dataElement[element.column])));
      }
      return initialArray;
    });
    return initialArray;
  }

  const { filters: { filterByName: { name } } } = searchTerm;

  return (
    <table className="table table-striped table-dark table-hover">
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
        {masterFilter() && masterFilter()
          .filter((element) => element.name.toLowerCase()
            .includes(name.toLowerCase()))
          .map((element) => (
            <tr key={ element.name }>
              <td>{ element.name }</td>
              <td>{ element.rotation_period }</td>
              <td>{ element.orbital_period }</td>
              <td>{ element.diameter }</td>
              <td>{ element.climate }</td>
              <td>{ element.gravity }</td>
              <td>{ element.terrain }</td>
              <td>{ element.surface_water }</td>
              <td>{ element.population }</td>
              <td>{ element.films }</td>
              <td>{ element.created }</td>
              <td>{ element.edited }</td>
              <td>{ element.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default StarWarsTable;

// chave `residents` não deve ser exibida totalizando 13 colunas
