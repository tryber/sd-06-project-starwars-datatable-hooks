import React, { useState, useContext } from 'react';
import DataContext from '../context/DataContext';

function FilterBonus() {
  const { setOrder } = useContext(DataContext);

  const dropBox = [
    'name',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
    'climate',
    'gravity',
    'terrain',
  ];

  const [orderBy, setOrderby] = useState(
    { column: 'name', sort: '' },
  );

  const handleRadioButton = (event) => {
    setOrderby({ ...orderBy, sort: event.target.value });
  };

  const handleSelect = (event) => {
    setOrderby({ ...orderBy, column: event.target.value });
  };

  return (
    <div>
      <div>
        <label htmlFor="ASC">
          <input
            value="ASC"
            type="radio"
            data-testid="column-sort-input-asc"
            name="radio"
            id="ASC"
            onChange={ handleRadioButton }
          />
          ASC
        </label>
        <label htmlFor="DESC">
          <input
            value="DESC"
            type="radio"
            data-testid="column-sort-input-desc"
            name="radio"
            id="DESC"
            onChange={ handleRadioButton }
          />
          DESC
        </label>
      </div>
      <select data-testid="column-sort" onChange={ handleSelect }>
        {dropBox.map((config) => (
          <option key={ config } value={ config }>{config}</option>
        ))}
      </select>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ setOrder(orderBy) }
      >
        Ordernar
      </button>
    </div>
  );
}

export default FilterBonus;
