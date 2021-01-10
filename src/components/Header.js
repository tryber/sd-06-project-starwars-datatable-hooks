import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

const Header = () => {
  const { setFilterByName, setFilterByNumericValue } = useContext(SWContext);

  const options = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const comparasionArray = ['maior que', 'menor que', 'igual a'];

  const handleClick = () => {
    const columnSelect = document.getElementById('column-filter').value;
    const comparisonSelect = document.getElementById('comparison-filter').value;
    const numberFilter = document.getElementById('value-filter').value;
    const filtering = {
      column: columnSelect,
      comparison: comparisonSelect,
      value: numberFilter,
    };
    setFilterByNumericValue(filtering);
  };

  const resetFilter = () => {
    const filtering = {
      column: '',
      comparison: '',
      value: '',
    };
    setFilterByNumericValue(filtering);
  };

  return (
    <div>
      <label htmlFor="filter">
        Buscar:
        <input
          type="text"
          name="filter"
          data-testid="name-filter"
          onChange={ (e) => setFilterByName(e.target.value) }
        />
      </label>
      <br />
      <label htmlFor="column-filter">
        Filtro Tipo:
        {' '}
        <select data-testid="column-filter" id="column-filter">
          <option hidden value="">Selecione</option>
          {options.map((optionElement) => (
            <option key={ optionElement } value={ optionElement }>
              {optionElement}
            </option>
          ))}
        </select>
      </label>
      {' '}
      <label htmlFor="comparison-filter">
        Comparação:
        {' '}
        <select data-testid="comparison-filter" id="comparison-filter">
          <option hidden value="">Selecione</option>
          {comparasionArray.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
      {' '}
      <label htmlFor="value-filter">
        Número:
        <input type="number" data-testid="value-filter" id="value-filter" />
      </label>
      {' '}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Criar Filtro
      </button>
      <button
        data-testid="filter"
        type="button"
        onClick={ resetFilter }
      >
        X
      </button>
    </div>
  );
};

export default Header;
