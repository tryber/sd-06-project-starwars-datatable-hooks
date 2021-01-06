import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import handleFilterByNumber from '../services/handleFilterByNumber';

export default function SearchFormNumber() {
  const { filters, setFilters, arrFilters } = useContext(StarWarsContext);

  const handleColumn = (event) => {
    const newValue = event.target.value;
    const newArrei = [{
      column: newValue,
      comparison: filters.filterByNumericValues[0].comparison,
      value: filters.filterByNumericValues[0].value,
    }];
    setFilters({ ...filters, filterByNumericValues: newArrei });
  };

  const handleComparison = (event) => {
    const newValue = event.target.value;
    const newArrei = [{
      column: filters.filterByNumericValues[0].column,
      comparison: newValue,
      value: filters.filterByNumericValues[0].value,
    }];
    setFilters({ ...filters, filterByNumericValues: newArrei });
  };

  const handleValue = (event) => {
    const newValue = event.target.value;
    const newArrei = [{
      column: filters.filterByNumericValues[0].column,
      comparison: filters.filterByNumericValues[0].comparison,
      value: newValue,
    }];
    setFilters({ ...filters, filterByNumericValues: newArrei });
  };

  return (
    <div>
      <span>Busca por Número:</span>
      <select
        data-testid="column-filter"
        onChange={ handleColumn }
      >
        <option disabled selected>Select your filter</option>
        { arrFilters
          .map((filtro) => (
            <option key={ arrFilters.indexOf(filtro) }>
              { filtro }
            </option>)) }
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleComparison }
      >
        <option disabled selected>Select your comparison</option>
        <option>maior que</option>
        <option>igual a</option>
        <option>menor que</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        placeholder="ex:100"
        onChange={ handleValue }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterByNumber }
      >
        Filtrar
      </button>
    </div>
  );
}
