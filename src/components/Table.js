import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

const Table = () => {
  const { filteredPlanets } = useContext(SWContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">climate</th>
          <th scope="col">created</th>
          <th scope="col">diameter</th>
          <th scope="col">edited</th>
          <th scope="col">name</th>
          <th scope="col">gravity</th>
          <th scope="col">residents</th>
          <th scope="col">orbital_period</th>
          <th scope="col">population</th>
          <th scope="col">films</th>
          <th scope="col">rotation_period</th>
          <th scope="col">surface_water</th>
          <th scope="col">terrain</th>
        </tr>
      </thead>
      <tbody>
        { filteredPlanets }
      </tbody>
    </table>
  );
};

export default Table;
