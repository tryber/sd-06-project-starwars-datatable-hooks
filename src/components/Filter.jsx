import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { filters, setFilters, setNumericFilter, } = useContext(StarWarsContext);

  function handleChange(e) {
    setFilters({ ...filters, filterByName: { name: e.target.value } });
  }

  function handleSelect () {
    const selectedColumn = document.getElementById('column-filter').value;
    const selectedComparison = document.getElementById('comparison-filter').value;
    const selectedNumber = document.getElementById('value-filter').value;
    const selectedFilter = {
      column: columnSelect,
      comparison: comparisonSelect,
      number: numberSelect,
    };
    setNumericFilter(selectedFilter);
  }
  function eraseFilter () {
    const selectedFilter = {
      column: columnSelect,
      comparison: comparisonSelect,
      number: numberSelect,
      };
    setNumericFilter(selectedFilter);
  }

  

  return (
    <>

      <input
        data-testid="name-filter"
        type="text"
        value={ filters.filterByName.name }
        onChange={ handleChange }
      />

      <div data-testid="filter">
        <select data-testid="column-filter" id="column-filter">
        <option value="">Selecione</option>
          <option value="population" key="population">population</option>
          <option value="orbital_period" key="orbital_period">orbital_period</option>
          <option value="diameter" key="diameter">diameter</option>
          <option value="rotation_period" key="rotation_period">rotation_period</option>
          <option value="surface_water" key="surface_water">surface_water</option>
        </select>

        <select data-testid="comparison-filter" id="comparison-filter">
          <option value="">Selecione</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
        data-testid="value-filter"
        type="number"
        id="value-filter"
      />
      <button
        data-testid="filter"
        type="button"
        onClick={ eraseFilter }
        >
          Filtrar
      </button>

      </div>

    </>
    
  );
}
