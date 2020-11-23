import React, { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const PlanetTable = () => {
  const [planets, setPlanets] = useState(['']);
  const [headers, setHeaders] = useState(['']);
  const { filters } = useContext(StarWarsContext);

  useEffect(() => {
    const fetchPlanets = async () => {
      // const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const URL = 'http://swapi.dev/api/planets/';

      const planetsResponse = await fetch(URL);
      const planetsObj = await planetsResponse.json();

      setPlanets(planetsObj.results);

      const planetList = planetsObj.results;
      const headersList = Object.keys(planetList[0])
        .filter((key) => key !== 'residents');

      setHeaders(headersList);
    };

    fetchPlanets();
  }, []);

  const nameFilter = () => {
    const text = filters.filterByName.name;

    return text !== '' ? planets
      .filter((planet) => String(planet.name).includes(text) !== false) : planets;
  };

  const valueObj = filters.filterByNumericValues[0];
  const { value } = valueObj;

  const numericValueFilter = (planetList) => {
    const columnObj = filters.filterByNumericValues;
    const { column } = columnObj[0];
    const comparisonObj = filters.filterByNumericValues;
    const { comparison } = comparisonObj[0];

    if (value === undefined) {
      return planets;
    }

    switch (comparison) {
    case 'maior que':
      return planetList.filter((planet) => planet[column] > Number(value));

    case 'igual a':
      return planetList.filter((planet) => planet[column] === String(value));

    case 'menor que':
      return planetList.filter((planet) => planet[column] < Number(value));

    default:
      return planetList;
    }
  };

  const planetList = nameFilter();

  const newList = numericValueFilter(planetList);

  return (
    <table>
      <thead>
        <tr>
          { headers.map((header) => <th key={ `${header}` }>{ header }</th>) }
        </tr>
      </thead>
      <tbody>
        { (value ? newList : planetList)
          .map((planet, index) => (
            <tr key={ `${index}${planet}` }>
              { headers.map((header) => (
                <td key={ `${planet}${header}` }>
                  { planet[header] }
                </td>
              )) }
            </tr>)) }
      </tbody>
    </table>
  );
};

export default PlanetTable;
