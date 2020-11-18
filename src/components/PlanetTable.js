import React, { useEffect, useState } from 'react';
import fetchAPI from '../services/fetchAPI';

function PlanetTable() {
  const [tableHeaders, setTableHeaders] = useState([]);
  const [listPlanets, setListPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

      setListPlanets(await fetchAPI(URL));

      const headers = Object.keys(
        (await fetchAPI(URL))[0],
      ).filter((key) => key !== 'residents');

      setTableHeaders(headers);
    };

    fetchPlanets();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          { tableHeaders.map((header) => <th key={ `${header}` }>{ header }</th>) }
        </tr>
      </thead>
      <tbody>
        { listPlanets.map((planet, index) => (
          <tr key={ `${index}${planet}` }>
            { tableHeaders.map((header) => (
              <td key={ `${planet}${header}` }>
                { planet[header] }
              </td>
            )) }
          </tr>)) }
      </tbody>
    </table>
  );
}

export default PlanetTable;
