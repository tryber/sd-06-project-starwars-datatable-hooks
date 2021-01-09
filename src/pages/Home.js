import React from 'react';
import InputName from '../components/InputName';
import TablePlanets from '../components/TablePlanets';
import Provider from '../context/Provider';

function Home() {
  return (
    <Provider>
      <div>
        <InputName />
        <table>
          <TablePlanets />
        </table>
      </div>
    </Provider>
  );
}
export default Home;
