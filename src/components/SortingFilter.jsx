import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SortingFilter() {
  const { setSorting, order, setOrder } = useContext(StarWarsContext);

  function handleChange(e) {
    e.preventDefault();
    const columnSelected = document.getElementById('sort-selection').value;
    const sortSelection = {
      column: columnSelected,
    };
    setOrder(sortSelection);
  }

  function handleRadio(e) {
    setOrder({ order, sort: e.target.value });
  }

  return (
    <div className="form-group">
      <select data-testid="column-sort" id="sort-selection" onChange={ handleChange }>
        <option value="name" key="name">name</option>
        <option value="population" key="population">population</option>
        <option value="orbital_period" key="orbital_period">orbital_period</option>
        <option value="diameter" key="diameter">diameter</option>
        <option value="rotation_period" key="rotation_period">rotation_period</option>
        <option value="surface_water" key="surface_water">surface_water</option>
      </select>
      <div className="radio">
        <label htmlFor="ASC">
          ASC
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            onChange={ handleRadio }
            name="sorting-radio"

          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            onChange={ handleRadio }
            name="sorting-radio"
            checked
          />
        </label>
      </div>
      <button
        type="submit"
        data-testid="column-sort-button"
        onClick={ setSorting(order) }
      >
        Sort you must
      </button>
    </div>
  );
}

export default SortingFilter;
