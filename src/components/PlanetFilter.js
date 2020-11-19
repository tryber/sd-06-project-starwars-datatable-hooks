import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetFilter() {
  const zero = 0;
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(zero);
  const {
    filterPlanet,
    setFilterPlanet,
    filterNumericValues,
    setFilterNumericValues,
  } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Planet filter"
        onChange={ (event) => { setFilterPlanet(event.target.value); } }
        value={ filterPlanet }
      />
      <div>
        <select
          data-testid="column-filter"
          onChange={ (event) => setColumn(event.target.value) }
          value={ column }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (event) => setComparison(event.target.value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ (event) => setValue(event.target.value) }
          value={ value }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setFilterNumericValues(
              [...filterNumericValues, { column, comparison, value }],
            );
          } }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default PlanetFilter;
