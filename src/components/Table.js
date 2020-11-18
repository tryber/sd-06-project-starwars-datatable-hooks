import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data,
    filters: { filterByName: { name },
      filterByNumericValues: [{ column, comparison, value }] },
  } = useContext(StarWarsContext);
  const filteringName = (e) => typeof e.name === 'string' && e.name
    .includes(name);
  const filteringNumeric = (e) => {
    let result = false;
    if (column === '' || comparison === '' || value === '') {
      result = true;
    } else {
      if (comparison === 'maior que' && parseInt(e[column], 10) > value) {
        result = true;
      }
      if (comparison === 'menor que' && parseInt(e[column], 10) < value) {
        result = true;
      }
      if (comparison === 'igual a' && e[column] === value.toString()) {
        result = true;
      }
    }
    return result;
  };
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          {Object.keys(data[0])
            .map((header) => (<th key={ header }>{header}</th>))}
        </tr>
      </thead>
      {data
        .filter((e) => filteringName(e) && filteringNumeric(e))
        .map((planet) => (
          <tr className="table-active" key={ planet }>
            {Object.values(planet).map((col) => (<td key={ col }>{ col }</td>))}
          </tr>))}
    </table>
  );
}

export default Table;
