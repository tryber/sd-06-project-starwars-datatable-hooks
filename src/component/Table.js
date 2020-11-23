import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    planets, getData, filters: { filterByName,
      filterByNumericValues: [
        { column, setColumn, comparison, setComparison, value, setValue },
      ] },
  } = useContext(StarWarsContext);

  const [tempCol, setTempCol] = useState('rotation_period');
  const [tempComp, setTempComp] = useState('>');
  const magicZero = 0;
  const [tempVal, setTempVal] = useState(magicZero);

  const columnTitle = [
    'name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
    'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url',
  ];

  const columnFilter = [
    'rotation_period', 'orbital_period', 'diameter', 'surface_water', 'population',
  ];

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setFilters = () => {
    setColumn(tempCol);
    setComparison(tempComp);
    setValue(tempVal);
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="nameFilter">
          Nome:
          <input
            data-testid="name-filter"
            id="nameFilter"
            value={ filterByName.name }
            onChange={ ({ target }) => filterByName.setName(target.value) }
          />
        </label>
        <label htmlFor="filters">
          Escolha o campo:
          <select
            data-testid="column-filter"
            name="filters"
            value={ tempCol }
            onChange={ ({ target }) => setTempCol(target.value) }
          >
            {columnFilter.map((filters) => (
              <option key={ filters } value={ filters }>{ filters }</option>
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            name="filters"
            value={ tempComp }
            onChange={ ({ target }) => setTempComp(target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <input
            type="number"
            data-testid="value-filter"
            value={ tempVal }
            onChange={ ({ target }) => setTempVal(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ setFilters }
        >
          Filtrar
        </button>
      </form>
      <table>
        <thead>
          <tr>
            {columnTitle.map((title) => <th key={ title }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {(!planets) ? <h1>LOADING...</h1>
            : planets.filter((name) => name.name.match(filterByName.name))
              .filter((filter) => {
                if (!column && !comparison && !value) return filter;
                if (comparison === 'maior que') {
                  return Number(filter[column]) > Number(value);
                }
                if (comparison === 'menor que') {
                  return Number(filter[column]) < Number(value);
                }
                return Number(filter[column]) === Number(value);
              })
              .map((item) => (
                <tr key={ item.name }>
                  <td>{ item.name }</td>
                  <td>{ item.rotation_period }</td>
                  <td>{ item.orbital_period }</td>
                  <td>{ item.diameter }</td>
                  <td>{ item.climate }</td>
                  <td>{ item.gravity }</td>
                  <td>{ item.terrain }</td>
                  <td>{ item.surface_water }</td>
                  <td>{ item.population }</td>
                  <td>{ item.films }</td>
                  <td>{ item.created }</td>
                  <td>{ item.edited }</td>
                  <td>{ item.url }</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
