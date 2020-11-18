import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import API from '../services/api';

function Table() {
  const { state, setState } = useContext(StarWarsContext);

  if (state.data) {
    // console.log(state.data.results);
  }

  let table;
  if (state.isFetching || !state.data) {
    table = <p>Loading...</p>;
  } else {
    if (state.filters.filterByName.name) {
      console.log(state.data);
      // const newResults = state.data.results.filter((result) => result.name.length > 6);

      setState((prevState) => ({
        ...state,
        data: {
          results: prevState.data.results.filter((result) => result.name.length > 6),
        },
      }));
    }

    // setState((prevState) => ({
    //   ...state,
    //   data: prevState.data.results((result) => result.name.includes('Tattooine')),
    // }));

    // state.data.results.filter((result) => result.name.includes('Tattooine'));

    // state.data.results.map((result) => delete result.residents);

    // console.log(state);
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
          state.data.results.map((result, index) => (
            <tbody key={ index }>
              <tr>
                {Object.values(result).map((each, i) => <td key={ i }>{each}</td>)}
              </tr>
            </tbody>
          ))
        }
      </table>
    );
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
