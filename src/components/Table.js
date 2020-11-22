import React from 'react';
import fetchPlanets from '../services/fetchApi';

const Table = () => {
  const data = fetchPlanets();
  console.log(data);
  return (
    <div>
      Data list:
    </div>
  );
};

export default Table;
