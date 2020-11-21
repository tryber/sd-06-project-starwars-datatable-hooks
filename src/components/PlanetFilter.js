import React, { useContext, useState, useEffect } from 'react';
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
    filters: { filterByName, filterByNumericValues },
    setFilters,
  } = useContext(StarWarsContext);
  const comparisonsArray = ['maior que', 'menor que', 'igual a'];
  const columnArray = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  // se escolhido o elemento do columnArray, ele deve ser tirado da seleção
  // se elem de columnArray estiver dentro

  const notRepeatFilters = () => {
    if (filterByNumericValues === undefined) {
      return columnArray;
    }
    return columnArray.filter((element) => element !== filterByNumericValues.column);
  };
  useEffect(() => {
    setFilters({ ...filterByName, filterPlanet },
      [...filterByNumericValues, ...filterNumericValues]);
  }, filterNumericValues);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Planet filter"
        onChange={ (event) => {
          setFilterPlanet(event.target.value);
        } }
        value={ filterPlanet }
      />
      <div>
        <select
          data-testid="column-filter"
          onChange={ (event) => setColumn(event.target.value) }
          value={ column }
        >
          {notRepeatFilters(columnArray).map((e) => (
            <option key={ e } value={ e }>
              {e}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (event) => setComparison(event.target.value) }
          value={ comparison }
        >
          {comparisonsArray.map((e) => (
            <option key={ e } value={ e }>
              {e}
            </option>
          ))}
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
            setFilterNumericValues([
              ...filterNumericValues,
              { column, comparison, value },
            ]);
          } }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default PlanetFilter;
