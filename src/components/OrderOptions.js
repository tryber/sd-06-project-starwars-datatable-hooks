import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function OrderOptions() {
  const { setOrder, options } = useContext(StarWarsContext);

  const [columnOrder, setColumnOrder] = useState('name');
  const [order, setOrderState] = useState('ASC');

  return (
    <section className="form-inline">
      <h1 className="navbar-brand">
        Order by:
      </h1>
      <select
        className="form-control"
        data-testid="column-sort"
        value={ columnOrder }
        onChange={ (ev) => setColumnOrder(ev.target.value) }
      >
        {options.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        ))}
      </select>

      <div
        className="custom-control custom-radio"
        onChange={ (ev) => setOrderState(ev.target.value) }
      >
        <div className="custom-control custom-radio custom-control-inline">
          <input
            className="custom-control-input"
            id="Asc"
            type="radio"
            name="sort"
            data-testid="column-sort-input-asc"
            value="ASC"
          />
          <span className="custom-control-label" htmlFor="Asc">ASC</span>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            className="custom-control-input"
            id="Desc"
            type="radio"
            name="sort"
            data-testid="column-sort-input-desc"
            value="DESC"
          />
          <span className="custom-control-label" htmlFor="Desc">DESC</span>
        </div>

      </div>
      <button
        className="btn btn-outline-success my-2 my-sm-0"
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
