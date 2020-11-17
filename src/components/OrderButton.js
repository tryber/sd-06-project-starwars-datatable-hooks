import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const colunas = [
  '',
  'Name',
  'Rotation_Period',
  'Orbital_Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface_Water',
  'Population',
];
export default function OrderButton() {
  const [selectColumn, setSelectColumn] = useState('Name');
  const [sobeOuDesce, setSobeOuDesce] = useState('ASC');
  const { orderFunction } = useContext(StarWarsContext);

  // prettier-ignore
  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ (event) => setSelectColumn(event.target.value) }
      >
        {colunas.map((value) => (
          <option key={ value } value={ value.toLowerCase() }>{value}</option>
        ))}
      </select>
      <input
        id="ASC"
        data-testid="column-sort-input-asc"
        type="radio"
        name="ordem"
        value="ASC"
        onChange={ (event) => setSobeOuDesce(event.target.value) }
      />
      <label htmlFor="ASC">
        <input
          id="DESC"
          data-testid="column-sort-input-desc"
          type="radio"
          name="ordem"
          value="DESC"
          onChange={ (event) => setSobeOuDesce(event.target.value) }
        />
        ASC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => orderFunction(sobeOuDesce, selectColumn) }
      >
        CLIQUE AQUI
      </button>
    </div>
  );
}
