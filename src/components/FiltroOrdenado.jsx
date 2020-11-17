import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const optionsHeader = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function FiltroOrdenado() {
  const { setFilterOrder } = useContext(StarWarsContext);
  const [state, setState] = useState({ column: '', sort: '' });

  function selectedOrder(e) {
    setState({ ...state, [e.target.id]: e.target.value });
  }

  function handleClick() {
    const { column, sort } = state;
    setFilterOrder(() => ({ column, sort }));
  }

  return (
    <div>
      <select
        id="column"
        data-testid="column-sort"
        onChange={ (event) => selectedOrder(event) }
      >
        {
          optionsHeader.map(
            (option) => <option key={ option } value={ option }>{ option }</option>,
          )
        }
      </select>
      <input
        id="sort"
        value="ASC"
        data-testid="column-sort-input-asc"
        name="order"
        type="radio"
        onClick={ (event) => selectedOrder(event) }
      />
      ASC
      <input
        id="sort"
        value="DESC"
        data-testid="column-sort-input-desBREAK"
        name="order"
        type="radio"
        onClick={ (event) => selectedOrder(event) }
      />
      DESC
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ (e) => handleClick(e) }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FiltroOrdenado;
