import React from 'react';
import { useContext } from 'react';
import MyContext from './context/MyContext';
import usePlanets from './context/usePlanets';

function Table() {
  const { data } = useContext(MyContext);

  return (
    <table>
      <thead>
        { data.map(({ name }) => (
          <tr>
            <th>{[name]}</th>
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default Table;
