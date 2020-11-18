import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const zero = 0;
  const { data, getData, isFetching } = useContext(StarWarsContext);
  if (isFetching === true) {
    getData();
    return (<h1>Loading...</h1>);
  }
  if (data.length !== zero) {
    const dataHeaders = Object.keys(data[0])
      .filter((item) => item !== 'residents');
    return (
      <table>
        <tbody>
          <tr className="table-header">
            { dataHeaders
              .map((header, index) => (
                <th key={ index }>
                  { header.split('_').join(' ') }
                </th>))}
          </tr>
          { data.map((planet, index) => (
            <tr key={ index }>
              { dataHeaders.map((info, i) => (<td key={ i }>{ planet[info] }</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
