import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TablePlanets() {
  const { contexts } = useContext(StarWarsContext);
  const {
    planets,
    filters,
    setFilters,
  } = contexts;

  const headersTable = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  const numericFilterComparsion = () => {
    if (filters.filterByNumericValues.length < 1) {
      return planets;
    }
    const initialCounter = 0;
    let filterPlanets = planets;
    for (let i = initialCounter; i < filters.filterByNumericValues.length; i += 1) {
      filterPlanets = filterPlanets.filter((any) => {
        const convertNumber = any[filters.filterByNumericValues[i].column];
        switch (filters.filterByNumericValues[i].comparisons) {
        case 'menor que':
          return Number(convertNumber) < Number(
            filters.filterByNumericValues[i].number,
          );
        case 'igual a':
          return Number(convertNumber) === Number(
            filters.filterByNumericValues[i].number,
          );
        case 'maior que':
          return Number(convertNumber) > Number(
            filters.filterByNumericValues[i].number,
          );
        default:
          break;
        }
        return true;
      });
    }
    return filterPlanets;
  };

  useEffect(() => {
    numericFilterComparsion();
  }, [filters.filterByNumericValues]);

  const handleClearFilters = (name) => {
    const removeFiltered = filters
      .filterByNumericValues.filter((any) => any.column !== name);
    setFilters({
      ...filters,
      filterByNumericValues: (removeFiltered),
    });
  };

  const handleSelectedColumn = (selectedColumn) => {
    console.log(selectedColumn);
    setFilters((prevState) => (
      { ...prevState,
        order: {
          ...prevState.order,
          column: selectedColumn,
        },
      }
    ));
  };

  const orderTypeUpdate = (typeOrder) => {
    console.log('tipo de ordenação: ', typeOrder);
    setFilters((prevState) => (
      { ...prevState,
        order: {
          ...prevState.order,
          sort: typeOrder,
        },
      }
    ));
  };

  const sortPlanets = () => {
    console.log('Sort planets diz: Hello!');
    const sortColumnPlanets = planets;
    console.log('cópia de planets: ', sortColumnPlanets);
    const negativeOne = -1;
    const positiveOne = 1;
    const zero = 0;
    const testingSort = sortColumnPlanets.sort((a, b) => {
      const columnSelect = filters.order.column;
      console.log('O que columnSelect: ', columnSelect);
      if (a.columnSelect > b.columnSelect) {
        return positiveOne;
      }
      if (a.columnSelect < b.columnSelect) {
        return negativeOne;
      }
      return zero;
    });
    console.log('planetas ordenados: ', testingSort);
  };

  return (
    <div>
      <div>
        { filters.filterByNumericValues.map((filter, index) => (
          <div key={ index } data-testid="filter">
            { `${filter.column} ${filter.comparisons} ${filter.number}` }
            <button
              type="button"
              name={ filter.column }
              onClick={ ({ target }) => handleClearFilters(target.name) }
            >
              X
            </button>
          </div>
        )) }
      </div>
      <select
        data-testid="column-sort"
        onClick={ ({ target }) => handleSelectedColumn(target.value) }
      >
        {headersTable.map((headers) => (
          <option
            key={ headers }
            value={ headers }
          >
            { headers }
          </option>
        ))}
      </select>
      <label htmlFor="asc">
        <input
          name="input-sort"
          id="asc"
          type="radio"
          value="ASC"
          onChange={ ({ target }) => orderTypeUpdate(target.value) }
          data-testid="column-sort-input-asc"
        />
        Ascendente
      </label>
      <label htmlFor="dsc">
        <input
          name="input-sort"
          id="dsc"
          type="radio"
          value="DESC"
          onChange={ ({ target }) => orderTypeUpdate(target.value) }
          data-testid="column-sort-input-desc"
        />
        Descentende
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => sortPlanets() }
      >
        Ordenar
      </button>
      <table>
        <thead>
          <tr>
            {headersTable.map((headers, index) => (
              <th key={ index }>{headers}</th>))}
          </tr>
        </thead>
        <tbody>
          {numericFilterComparsion()
            .filter((planet) => planet.name.toLowerCase()
              .includes(filters.filterByName.name.toLowerCase())).map(
              (
                {
                  name,
                  rotation_period: rotationPeriod,
                  orbital_period: orbitalPeriod,
                  diameter,
                  climate,
                  gravity,
                  terrain,
                  surface_water: surfaceWater,
                  population,
                  films,
                  created,
                  edited,
                  url,
                },
                index,
              ) => (
                <tr key={ index }>
                  <td>{name}</td>
                  <td>{rotationPeriod}</td>
                  <td>{orbitalPeriod}</td>
                  <td>{diameter}</td>
                  <td>{climate}</td>
                  <td>{gravity}</td>
                  <td>{terrain}</td>
                  <td>{surfaceWater}</td>
                  <td>{population}</td>
                  <td>{films.length}</td>
                  <td>{created}</td>
                  <td>{edited}</td>
                  <td>{url}</td>
                </tr>
              ),
            )}
        </tbody>
      </table>
    </div>
  );
}

export default TablePlanets;
