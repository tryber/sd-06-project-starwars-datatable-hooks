import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

const Table = () => {
  const { jobs } = useContext(SWContext);

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">climate</th>
          <th scope="col">created</th>
          <th scope="col">diameter</th>
          <th scope="col">edited</th>
          <th scope="col">name</th>
          <th scope="col">gravity</th>
          <th scope="col">name</th>
          <th scope="col">orbital_period</th>
          <th scope="col">population</th>
          <th scope="col">name</th>
          <th scope="col">rotation_period</th>
          <th scope="col">surface_water</th>
          <th scope="col">terrain</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr key={job.title}>
            <td>{job.climate}</td>
            <td>{job.created}</td>
            <td>{job.diameter}</td>
            <td>{job.edited}</td>
            <td>{job.name}</td>
            <td>{job.gravity}</td>
            <td>{job.name}</td>
            <td>{job.orbital_period}</td>
            <td>{job.population}</td>
            <td>{job.name}</td>
            <td>{job.rotation_period}</td>
            <td>{job.surface_water}</td>
            <td>{job.terrain}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
