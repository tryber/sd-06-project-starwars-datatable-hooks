import React, { useContext, useEffect, useState } from 'react';
import JobContext from '../context/JobContext';

function Table() {
  const { jobs, getJobOffers, searchTerm } = useContext(JobContext);

  useEffect(() => {
    getJobOffers();
  }, []);

  // sem parametros => didUpdate
  // [] => didmount
  // [variavel] => didUpdate condicional (shouldComponentUpdate)
  // retornar callback => willUnmount

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Tipo</th>
          <th scope="col">Localização</th>
          <th scope="col">Empresa</th>
        </tr>
      </thead>
      <tbody>
        {jobs
          .filter((job) => job.title.toLowerCase()
            .includes(searchTerm.toLowerCase())
          ).map((job) => (
            <tr key={ job.title }>
              <td>{job.title}</td>
              <td>{job.type}</td>
              <td>{job.location}</td>
              <td>{job.company}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
