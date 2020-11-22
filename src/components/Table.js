import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../App.css';

function Table() {
  const tableHeader = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited',
    'url'];
  const {
    filters: { filterByName: { name },
      filterByNumericValues },
    getPlanetsData,
    data,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsData();
  }, []);

  const getFilterNumber = (planets) => {
    let result = planets;
    const numberZero = 0;

    if (filterByNumericValues.length === numberZero) {
      return result;
    }

    filterByNumericValues.forEach((filterNumeric) => {
      if (filterNumeric.comparison === 'maior que') {
        result = result
          .filter((planet) => planet[filterNumeric.column] > Number(filterNumeric.value));
      } else if (filterNumeric.comparison === 'menor que') {
        result = result
          .filter((planet) => planet[filterNumeric.column] < Number(filterNumeric.value));
      } else if (filterNumeric.comparison === 'igual a') {
        result = result
          .filter((planet) => Number(planet[filterNumeric.column])
            === Number(filterNumeric.value));
      }
    });
    return result;
  };

  return (
    <table className="table table-striped table-hover">
      <thead className="thead-dark">
        <tr>
          { tableHeader.map((header) => <th key={ header } scope="col">{ header }</th>) }
        </tr>
      </thead>
      <tbody>
        { getFilterNumber(data).filter((dataPlanet) => (
          dataPlanet.name.toLowerCase().includes(name.toString().toLowerCase())
        )).map((dataPlanet) => (
          <tr key={ dataPlanet.name }>
            <td>{ dataPlanet.name }</td>
            <td>{ dataPlanet.rotation_period }</td>
            <td>{ dataPlanet.orbital_period }</td>
            <td>{ dataPlanet.diameter }</td>
            <td>{ dataPlanet.climate }</td>
            <td>{ dataPlanet.gravity }</td>
            <td>{ dataPlanet.terrain }</td>
            <td>{ dataPlanet.surface_water }</td>
            <td>{ dataPlanet.population }</td>
            <td>{ dataPlanet.films }</td>
            <td>{ dataPlanet.created }</td>
            <td>{ dataPlanet.edited }</td>
            <td>{ dataPlanet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
