import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import API from '../services/api';

function Table() {
  const { state, setState } = useContext(StarWarsContext);

  function renderTable() {
    // let table;
    if (state.isFetching || !state.data) {
      return <p>Loading...</p>;
    }
    let { planets } = state;

    if (state.filteredData) {
      console.log(state.planets);
      setState({
        ...state,
        planets: state.filteredData,
      });
    } else {
      planets = state.data.results;
    }
    // console.log(state.filteredData);

    planets.map((result) => delete result.residents);

    // console.log(planets);

    return (
      <table>
        <thead>
          <tr>
            {
              Object.keys(planets[0])
                .map((result, index) => <th key={ index }>{result}</th>)
            }
          </tr>
        </thead>
        {
          planets.map((result, index) => {
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
      {renderTable()}
    </div>
  );
}

export default Table;
