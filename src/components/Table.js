import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

const Table = () => {
  const { jobs } = useContext(SWContext);

  // const mockSW = [{}]

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Tipo</th>
          <th scope="col">Localização</th>
          <th scope="col">Empresa</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr key={job.title}>
            <td>job.title</td>
            <td>job.type</td>
            <td>job.location</td>
            <td>job.company</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
