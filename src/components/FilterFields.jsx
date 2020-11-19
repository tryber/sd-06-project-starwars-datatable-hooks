import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Context from '../context/StarWarsContext';

function FilterFields() {
  const {
    filters,
    setFilters,
    input,
    setInput,
    filteredPlanets,
    setFilteredPlanets,
  } = useContext(Context);
  const [column, setColumn] = useState('');
  const [comparasion, setComparasion] = useState('');
  const [value, setValue] = useState('');
  const [usedFilters, setUsedFilters] = useState([]);
  const numericFilters = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const noMatch = -1;

  // salva os filtros usados a partir do que está sendo alterado em filterByNumericValues
  // quando um filtro for salvo, atualizo o filteredPlanets que vem do Provider
  useEffect(() => {
    const filtersSaved = filters.filterByNumericValues.map((filter) => filter.column);
    setUsedFilters([...filtersSaved]);

    filters.filterByNumericValues.forEach((filter) => {
      const updatePlanets = filteredPlanets.filter((planet) => {
        switch (filter.comparasion) {
        case ('maior que'): {
          return parseInt(planet[filter.column], 10) > parseInt(filter.value, 10);
        }

        case ('menor que'): {
          return parseInt(planet[filter.column], 10) < parseInt(filter.value, 10);
        }
        default: {
          return parseInt(planet[filter.column], 10) === parseInt(filter.value, 10);
        }
        }
      });
      setFilteredPlanets(updatePlanets);
    });
  }, [filters.filterByNumericValues]);

  // salva o que está sendo digitado no input no filterByName
  // transformar em um useEffect a partir do que muda no input?
  const onChangeInput = (e) => {
    setInput(e.target.value);
    setFilters({
      ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  const submitFilter = (e) => {
    e.preventDefault();

    const newFilter = {
      column,
      comparasion,
      value,
    };

    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat(newFilter),
    });
    setColumn('');
    setComparasion('');
    setValue('');
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
      <form onSubmit={ (e) => submitFilter(e) }>
        <span>
          {'Filtro de valores numéricos: '}
          <select
            data-testid="column-filter"
            value={ column }
            onChange={ (e) => setColumn(e.target.value) }
          >
            {/* Compare two Javascript Arrays and remove Duplicates: https://stackoverflow.com/a/14930567 */}
            {numericFilters.filter((filter) => usedFilters.indexOf(filter) === noMatch)
              .map((filter, index) => {
                if (!filter) {
                  return <option key={ index } disabled value={ filter }>--</option>;
                }
                return <option key={ index } value={ filter }>{filter}</option>;
              })}
          </select>
        </span>
        <span>
          <select
            data-testid="comparison-filter"
            value={ comparasion }
            onChange={ (e) => setComparasion(e.target.value) }
          >
            <option value="">--</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </span>
        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          data-testid="button-filter"
          type="submit"
          disabled={ !column || !comparasion || !value }
        >
          Filtrar
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default FilterFields;
