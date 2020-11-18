import React, { useContext, useEffect } from 'react';
// import axios from 'axios';
import StarWarsContext from '../context/StarWarsContext';
import API from '../services/api';

function Table() {
  const { state, setState } = useContext(StarWarsContext);

  if (state.data) {
    console.log(state.data.results);
  }

  let table;
  if (state.isFetching || !state.data) {
    table = <p>Loading...</p>;
  } else {
    state.data.results.map((result) => delete result.residents);

    table = (
      <p>
        <table>
          <tr>
            {Object.keys(state.data.results[0]).map((result) => <th>{result}</th>)}
          </tr>
          {state.data.results.map((result) => <tr>{Object.values(result).map((each) => <td>{each}</td>)}</tr>)}
        </table>
      </p>);
  }

  // state.data.results.map((result) => <p>{state.data.results[0].name}</p>)

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios(
  //       'https://swapi-trybe.herokuapp.com/api/planets/',
  //     );

  //     setState({
  //       data: result,
  //     });
  //   }
  //   fetchData();
  // }, [setState]);

  // if (state.data) {
  //   console.log(state.data.results);
  // }

  return (
    <div>
      <API />
      {table}
    </div>
  );
}

export default Table;
