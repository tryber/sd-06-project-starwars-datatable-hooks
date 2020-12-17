import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInputs() {
  const { searchTerm,
    setSearchTerm,
    filterByNumericValues,
    setFilterByNumericValues } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population'); // estado local
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  return (
    <header>
      Pesquisa
      <input
        type="text"
        name="search"
        id="search"
        onChange={ (event) => setSearchTerm(event.target.value) }
        value={ searchTerm }
        data-testid="name-filter"
      />
      <select
        className="btn"
        data-testid="column-filter"
        value={ column }
        onChange={ (event) => setColumn(event.target.value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
        <option>diameter</option>
      </select>
      <select
        className="btn"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        value={ value }
        type="number"
        name="value-filter"
        id="value-filter"
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        type="button"
        className="btn"
        onClick={ () => setFilterByNumericValues([...filterByNumericValues,
          { column, comparison, value }]) }
        data-testid="button-filter"
      >
        add filter
      </button>
    </header>

  );
}

export default SearchInputs;

// ✕ Filtra utilizando a comparação "menor que" (4527ms)
// ✕ Filtra utilizando a comparação "maior que" (4541ms)
// ✕ Filtra utilizando a comparação "igual a" (4541ms)
