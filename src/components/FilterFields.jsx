import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import Context from '../context/StarWarsContext';

function FilterFields() {
  const { filters, setFilters, input, setInput } = useContext(Context);

  const filterOptions = {
    param: '',
    comparasionType: '',
    value: 0,
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
    setFilters({
      ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  return (
    <div>
      <span>
        {'Busca por planeta: '}
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Ex: Naboo"
          value={ input }
          onChange={ (e) => onChangeInput(e) }
        />
      </span>
      <form>
        <span>
          {'Filtro de valores numéricos: '}
          <select data-testid="column-filter" value={ filterOptions.param }>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </span>
        <span>
          <select data-testid="comparison-filter" value={ filterOptions.comparasionType }>
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </span>
        <input data-testid="value-filter" value={ filterOptions.value } />
        <button data-testid="button-filter" type="submit">Filtrar</button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default FilterFields;
