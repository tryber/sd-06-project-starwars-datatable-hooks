import React, { useContext, useState } from 'react';
import StarWarsContext from '../context';

function OrderFilter() {
  const { setFilters } = useContext(StarWarsContext);
  const [orderLocal, setOrderLocal] = useState('');
  const [orderColumnLocal, setOrderColumnLocal] = useState('');

  const setOrder = () => {
    setFilters((prevState) => ({
      ...prevState,
      orderFilter: {
        ...prevState.orderFilter,
        orderColumn: orderColumnLocal,
        order: orderLocal,
      },
    }));
  };

  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ ({ target }) => setOrderColumnLocal(target.value) }
      >
        <option>Selecione</option>
        <option value="population">population</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
      </select>
      <label htmlFor="ASC">
        <input
          type="radio"
          name="radio"
          value="ASC"
          id="ASC"
          data-testid="column-sort-input-asc"
          onClick={ ({ target }) => setOrderLocal(target.value) }
        />
        Ascending
      </label>
      <label htmlFor="DESC">
        <input
          type="radio"
          name="radio"
          value="DESC"
          id="DESC"
          data-testid="column-sort-input-desc"
          onClick={ ({ target }) => setOrderLocal(target.value) }
        />
        Descending
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setOrder() }
      >
        Ordernar
      </button>
    </div>
  );
}

export default OrderFilter;
