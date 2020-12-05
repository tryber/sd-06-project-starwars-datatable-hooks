import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import API from '../services/api';
import Filters from './Filters';
import '../index.css';

function Table() {
  const {
    data,
    setData,
    // backupData,
    setBackupData,
    // filters,
  } = useContext(StarWarsContext);

  useEffect(() => {
    async function fetchApi() {
      const apiResponse = await API();
      setData(apiResponse);
      setBackupData(apiResponse);
    }
    fetchApi();
  }, []);

  // useEffect(() => {
  //   if (data) {}
  // }, []);

  // function handleFilters(e) {
  //   setBackupData(data);
  //   let newResults;
  //   if (e.target.value !== '') {
  //     newResults = data.results
  //       .filter((result) => result.name.toLowerCase()
  //         .includes(e.target.value.toLowerCase()));
  //     newResults
  //       .filter((result) => result[filters.column] > filters.value);
  //   } else {
  //     newResults = backupData.results;
  //   }
  //   setData({
  //     ...data,
  //     results: newResults,
  //   });
  // }

  if (data) {
    const fields = data.results.map((result) => (
      <tr key={ result.url }>
        <td data-testid="planet-name">{result.name}</td>
        <td>{result.rotation_period}</td>
        <td>{result.orbital_period}</td>
        <td>{result.diameter}</td>
        <td>{result.climate}</td>
        <td>{result.created}</td>
        <td>{result.edited}</td>
        <td>{result.gravity}</td>
        <td>{result.population}</td>
        <td>{result.surface_water}</td>
        <td>{result.terrain}</td>
        <td>{result.films}</td>
        <td>{result.url}</td>
      </tr>
    ));

    return (
      <div>
        <Filters />
        {/* <input type="text" onChange={ (e) => handleFilters(e) } /> */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Created</th>
              <th>Edited</th>
              <th>Gravity</th>
              <th>Population</th>
              <th>Surface Water</th>
              <th>Terrain</th>
              <th>Films</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {fields}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <p>Loading...</p>
  );
}

export default Table;
