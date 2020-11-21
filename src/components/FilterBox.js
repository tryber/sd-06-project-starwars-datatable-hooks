import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterBox() {
  const { state, setState } = useContext(StarWarsContext);

  let newPlanets;

  function handleChange() {
    // setState({
    //   ...state,
    //   filteredData: state.data.results,
    // });
    state.filteredData = state.data.results;

    state.filteredData.map((result) => delete result.residents);

    const { comparison, column, value } = state.filters.filterByNumericValues;

    // Aqui de fato filtra pelo que o usuário escolher
    if (comparison === 'maior que') {
      newPlanets = state.filteredData.filter((planet) => planet[column] > value);
      // console.log(state.filteredData.filter((planet) => planet[column] > value));
      // console.log(newPlanets);

      setState(() => ({
        ...state,
        data: {
          ...state.data,
          filteredData: newPlanets,
        },
      }));

      console.log(state.data);
    }
  }

  useEffect(() => {
    console.log('updated!!!');
  }, [state.data]);

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (e) => setState({
          ...state,
          filters: {
            ...state.filters,
            filterByNumericValues: {
              ...state.filters.filterByNumericValues,
              column: e.target.value,
            },
          },
        }) }
      >
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
        <option value="population">population</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setState({
          ...state,
          filters: {
            ...state.filters,
            filterByNumericValues: {
              ...state.filters.filterByNumericValues,
              comparison: e.target.value,
            },
          },
        }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        placeholder={ 0 }
        data-testid="value-filter"
        onChange={ (e) => setState({
          ...state,
          filters: {
            ...state.filters,
            filterByNumericValues: {
              ...state.filters.filterByNumericValues,
              value: e.target.value,
            },
          },
        }) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleChange }
      >
        Adicionar filtro
      </button>
    </div>
  );
}

export default FilterBox;
