import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          {Object.keys(data[0])
            .filter((header) => header !== 'residents')
            .map((header) => (<th scope="col" key={ header }>{header}</th>))}
        </tr>
      </thead>
      {data.filter((e) => typeof e.name === 'string' && e.name.includes(filters.filterByName.name)).map((planet) => (
        <tr className="table-active" key={ planet }>
          {Object.entries(planet)
            .filter((value) => value[0] !== 'residents')
            .map((value) => (<td key={ value[1] }>{ value[1] }</td>))}
        </tr>))}
    </table>
  );
}

export default Table;
