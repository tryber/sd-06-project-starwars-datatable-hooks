import React, { useEffect, useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const PlanetTable = () => {
  const [planets, setPlanets] = useState(['']);
  const [headers, setHeaders] = useState(['']);
  const { name } = useContext(StarWarsContext);

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
    const text = name.filters.filterByName.name;

    return text !== '' ? planets
      .filter((planet) => String(planet.name).includes(text) !== false) : planets;
  };

  const planetList = nameFilter();

  return (
    <table>
      <thead>
        <tr>
          { headers.map((header) => <th key={ `${header}` }>{ header }</th>) }
        </tr>
      </thead>
      <tbody>
        { planetList.map((planet, index) => (
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
