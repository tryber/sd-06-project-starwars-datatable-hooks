import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filteredName } = useContext(StarWarsContext);
  const headers = [
    'Nome',
    'Período de Rotação',
    'Perído Orbital',
    'Diâmetro',
    'Clima',
    'Gravidade',
    'Terreno',
    'Água da Superfície',
    'População',
    'Filmes',
    'Criado',
    'Editado',
    'URL',
  ];

  const filterName = () => {
    const filteredData = data.filter((term) => term.name.toLowerCase()
      .includes(filteredName.toLowerCase()));
    return filteredData;
  };

  return !data ? <h1>Loading...</h1>
    : (
      <div>
        <table className="table">
          <thead>
            <tr>
              {
                headers.map((header) => <th key={ header } scope="col">{ header }</th>)
              }
            </tr>
          </thead>
          <tbody>
            { filterName().map((planet, index) => (
              <tr key={ index }>
                { Object.values(planet).map((info, indKey) => (
                  <td key={ indKey }>{ info }</td>
                )) }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

Table.propTypes = {

};

export default Table;
