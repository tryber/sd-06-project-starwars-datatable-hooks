import React, { useContext, useEffect } from 'react';
import Context from '../context/StarWarsContext';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table() {
  const { loading, data, getPlanets } = useContext(Context);

  useEffect(() => {
    getPlanets();
  }, []);

  if (loading) return (<h1>Loading...</h1>);

  // refatorar os dados passados para o TableHeader, pois do jeito que está vai quebrar se o filtro retornar vazio
  return (
    <div>
      <table>
        <TableHeader planet={ data[0] } />
        <tbody>
          {data.map((planet) => <TableRow key={ planet.name } planetValues={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
