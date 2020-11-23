import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumberInput() {
  const startNumber = 0;
  const [number, setNumber] = useState(startNumber);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const { numFilter, setNumFilter } = useContext(StarWarsContext);

  const handleNumber = ({ target }) => {
    setNumber(target.value);
  };

  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setComparison(target.value);
  };

  const handleClick = () => {
    setNumFilter([...numFilter,
      {
        column,
        comparison,
        number,
      },
    ]);
    setColumn('');
  };

  const col = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  return (
    <div>
      <select
        data-testid="column-filter"
        name={ column }
        onChange={ handleColumn }
        value={ column }
      >
        <option>Escolha</option>
        {col.filter((colum) => !numFilter.map((filter) => filter.column).includes(colum))
          .map((coluna) => (
            <option value={ coluna } key={ coluna }>{coluna}</option>
          ))}
      </select>
      <select
        name={ comparison }
        data-testid="comparison-filter"
        onChange={ handleComparison }
      >
        <option>Escolha</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="filter-number"
        value={ number }
        onChange={ handleNumber }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
      {/* <p>{ column, comparison, number }</p> */}
    </div>
  );
}

export default NumberInput;
