import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { data,
    setData,
    backupData,
    filters,
    setFilters,
    // changedData,
    // setChangedData,
  } = useContext(StarWarsContext);

  function changeField(e, field) {
    const { value } = e.target;
    setFilters({
      ...filters,
      [field]: value,
    });
  }

  function handleChange(e) {
    if (data) {
      let filtered;
      if (e.target.value !== '') {
        filtered = data.results
          .filter((result) => result.name.toLowerCase()
            .includes(e.target.value.toLowerCase()));
      } else {
        filtered = backupData.results;
      }
      setData({
        ...data,
        results: filtered,
      });
    }
  }

  function handleClick() {
    // console.log(filters.column);
    if (filters.comparison === 'maior que') {
      console.log(filters.column);
      // console.log(data.results[0][filters.column]);
      console.log(data.results);
      const filtered = data.results
        .filter((result) => Number(result[filters.column]) > Number(filters.value));
        // .filter((result) => result[filters.column] === filters.value);
      setData({
        ...data,
        results: filtered,
      });
    // setChangedData(true);
    } else if (filters.comparison === 'menor que') {
      console.log(filters.column, filters.comparison, filters.value);
      const filtered = data.results
        .filter((result) => Number(result[filters.column]) < Number(filters.value));
        // .filter((result) => result[filters.column] === filters.value);
      setData({
        ...data,
        results: filtered,
      });
    // setChangedData(true);
    } else if (filters.comparison === 'igual a') {
      console.log(filters.column, filters.comparison, filters.value);
      const filtered = data.results
        .filter((result) => Number(result[filters.column]) === Number(filters.value));
        // .filter((result) => result[filters.column] === filters.value);
      setData({
        ...data,
        results: filtered,
      });
      // setChangedData(true);
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={ handleChange }
        placeholder="Search by name"
        data-testid="name-filter"
      />
      <br />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ (e) => changeField(e, 'column') }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (e) => changeField(e, 'comparison') }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        placeholder={ 0 }
        onChange={ (e) => changeField(e, 'value') }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adicionar filtro
      </button>
    </div>
  );
}

export default Filters;
