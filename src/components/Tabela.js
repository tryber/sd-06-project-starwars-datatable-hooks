import React, { useContext, useEffect, useState } from 'react';
import SWContext from '../context/SWContext';

function Table() {
  const {
    dataByName, dataByNumeric, filteredData, filters, setFilters,
  } = useContext(SWContext);

  // console.log("data", data);
  // console.log("filteredData", filteredData);

  const ZERO = 0;

  useEffect(() => {
    dataByName();
    if (filters.filterByNumericValues) {
      dataByNumeric();
    }
  }, [filters]);

  // REQ 3
  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonFilter = [
    'maior que',
    'igual a',
    'menor que',
  ];
  const LOCAL_STATE = {
    column: 'population',
    comparison: 'maior que',
    value: ZERO,
  };
  const [numericValues, setNumericValues] = useState(LOCAL_STATE);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    if (name === 'filterByName') {
      setFilters({
        [name]: {
          name: value,
        },
      });
    } else {
      setNumericValues({
        // name: colum, comparison, value=l22,inputChange
        ...numericValues,
        [name]: value,
      });
    }
  };

  // adiciona a chave filterByNumericValues ao estado global req3
  const handleClick = () => {
    if (!filters.filterByNumericValues) {
      setFilters({
        ...filters,
        filterByNumericValues: [numericValues],
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, numericValues],
      });
    }
  };

  const returnObj = (planet) => Object.entries(planet).map(([key, value]) => {
    if (key !== 'residents') {
      return <td key={ key }>{value}</td>;
    }
    return null;
  });

  // funcao no return para nao qbrar se tiver zerado
  return filteredData.length !== ZERO && (
    <>
      <div>
        <form>
          <label htmlFor="filterByName">
            Name:
            {' '}
            <input
              data-testid="name-filter"
              type="text"
              name="filterByName"
              onChange={ (e) => handleChange(e) }
              placeholder="Nome"
            />
          </label>

          <label htmlFor="column">
            Numeric:
            {' '}
            <select
              data-testid="column-filter"
              name="column"
              onChange={ (e) => handleChange(e) }
            >
              {columnFilter
                .map((selection) => (
                  <option value={ selection } key={ selection }>
                    { selection }
                  </option>
                ))}
            </select>
          </label>

          <select
            data-testid="comparison-filter"
            name="comparison"
            onChange={ (e) => handleChange(e) }
          >
            {comparisonFilter
              .map((entry) => (
                <option value={ entry } key={ entry }>
                  { entry }
                </option>
              ))}
          </select>

          <input
            data-testid="value-filter"
            type="number"
            name="value"
            onChange={ (e) => handleChange(e) }
            placeholder="Valor"
          />

          <button
            data-testid="button-filter"
            type="button"
            onClick={ handleClick }
          >
            Acionar Filtro
          </button>
        </form>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Climate</th>
              <th>Created</th>
              <th>Diameter</th>
              <th>Edited</th>
              <th>Films</th>
              <th>Gravity</th>
              <th>Name</th>
              <th>Orbital Period</th>
              <th>Population</th>
              <th>Rotation Period</th>
              <th>Surface Water</th>
              <th>Terrain</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((planet) => (
              <tr key={ planet.name }>{returnObj(planet)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
