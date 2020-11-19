import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { setFilterByNumericValues } = useContext(StarWarsContext);
  const [column, setColumn] = useState([]);
  const [comparison, setComparison] = useState([]);
  const [value, setValue] = useState([]);

  return (
    <div>
      <select name="planet" data-testid='column-filter' onChange={ (event) => setColumn(event.target.value) }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select name="planet" data-testid='comparison-filter' onChange={ (event) => setComparison(event.target.value) }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input type="number" data-testid='value-filter' onChange={ (event) => setValue(event.target.value) }/>
      <button data-testid='button-filter' onClick={ () => setFilterByNumericValues({ column, comparison, value }) }>Filtrar</button>
    </div>
  );
}

export default Filters;
