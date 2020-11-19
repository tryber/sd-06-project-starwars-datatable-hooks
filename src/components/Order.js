import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Order() {
  const { setOrder } = useContext(StarWarsContext);
  const arrayOrders = ['name', 'rotation_period', 'orbital_period',
    'surface_water', 'population'];

  // const handleChange = ({ target }) => {

  // };

  const handleClickOrder = () => {
    const column = document.querySelector('#column-sort');
    const columnSelected = column.options[column.selectedIndex].value;
    const direction = document.querySelector('input[name="order"]:checked').value;

    setOrder({
      column: columnSelected,
      sort: direction,
    });
  };

  return (
    <div>
      <select data-testid="column-sort" id="column-sort">
        {arrayOrders.map((order, index) => (
          <option key={ index }>{order}</option>
        ))}
      </select>
      <div>
        <label htmlFor="asc">
          ASC
          <input
            type="radio"
            value="ASC"
            name="order"
            data-testid="column-sort-input-asc"
            id="asc"
          />
        </label>
        <label htmlFor="desc">
          DESC
          <input
            type="radio"
            value="DESC"
            name="order"
            data-testid="column-sort-input-desc"
            id="desc"
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleClickOrder }
        >
          Ordenar
        </button>
      </div>

    </div>
  );
}

export default Order;
