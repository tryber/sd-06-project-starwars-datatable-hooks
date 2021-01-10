import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

const Header = () => {
  const { setFilterByName } = useContext(SWContext);
  const { optionFilter, setOptionFilter } = useState('population');
  const { comparison, setComparison } = useState('maior que');

  const options = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const comparasionArray = ['maior que', 'menor que', 'igual a'];

  const setOption = () => {
    
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
        <select data-testid="column-filter">
          {options.map((optionelement, index) => (
            <option key={ index } value={ optionelement }>
              {optionelement}
            </option>
          ))}
        </select>
      </label>
      {' '}
      <label htmlFor="comparison-filter">
        Comparação:
        {' '}
        <select data-testid="comparison-filter">
          {comparasionArray.map((option, index) => (
            <option key={ index } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
      {' '}
      <label htmlFor="value-filter">
        Número:
        <input type="number" data-testid="value-filter" />
      </label>
      {' '}
      <button type="button" data-testid="button-filter">
        Criar Filtro
      </button>
    </div>
  );
};

export default Header;
