import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function OrderOptions() {
  const { setOrder } = useContext(StarWarsContext);

  const options = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water', 'population', 'residents',
    'films', 'created', 'edited'];

  const [columnOrder, setColumnOrder] = useState('name');
  const [order, setOrderState] = useState('ASC');

  return (
    <section>
      <select
        data-testid="column-sort"
        value={ columnOrder }
        onChange={ (ev) => setColumnOrder(ev.target.value) }
      >
        {options.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        ))}
      </select>
      <span onChange={ (ev) => setOrderState(ev.target.value) }>
        <input
          type="radio"
          name="sort"
          data-testid="column-sort-input-asc"
          value="ASC"
        />
        {' '}
        ASC
        <input
          type="radio"
          name="sort"
          data-testid="column-sort-input-desc"
          value="DESC"
        />
        {' '}
        DESC
      </span>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => setOrder(columnOrder, order) }
      >
        Order
      </button>
    </section>
  );
}

export default OrderOptions;
