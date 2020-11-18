import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import API from '../services/api';

function Table() {
  const { state } = useContext(StarWarsContext);

  let table;
  if (state.isFetching || !state.data) {
    table = <p>Loading...</p>;
  } else {
    state.data.results.map((result) => delete result.residents);

    table = (
      <table>
        <thead>
          <tr>
            {
              Object.keys(state.data.results[0])
                .map((result, index) => <th key={ index }>{result}</th>)
            }
          </tr>
        </thead>
        {
          state.data.results.map((result, index) => {
            if (result.name.toLowerCase()
              .includes(state.filters.filterByName.name.toLowerCase())) {
              return (
                <tbody key={ index }>
                  <tr>
                    {Object.values(result).map((each, i) => (<td key={ i }>{each}</td>))}
                  </tr>
                </tbody>
              );
            }
            return undefined;
          })
        }
      </table>
    );
  }

  return (
    <div>
      <API />
      {table}
    </div>
  );
}

export default Table;
