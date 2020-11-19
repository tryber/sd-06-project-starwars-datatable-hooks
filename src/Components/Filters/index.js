import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import CustomFilters from './CustomFilters';
import logo from '../../logo.svg';

const Filters = () => {
  const {
    id,
    setId,
    filters,
    setFilters,
    setColumn,
    setComparison,
    column,
    comparison,
    value,
    setValue } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  const colums = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const handleName = async ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };
  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setComparison(target.value);
  };

  const handleNumber = ({ target }) => {
    setValue(target.value);
  };

  const handleButton = () => {
    setFilters(
      {
        ...filters,
        filterByNumericValues: filters.filterByNumericValues
          .concat({ id, column, comparison, value }),
      },
    );
    setId(id + 1);
  };

  return (
    <div className="App">
      <img src={ logo } width="170" alt="logo app" className="logo" />
      <div className="inputs">
        <div className="brother">
          <div className="filter-name">
            <input
              value={ name }
              onChange={ handleName }
              type="text"
              placeholder="SEARCH A PLANET"
              data-testid="name-filter"
            />
            <div className="hexagon"> </div>
          </div>
          <div className="filter-comparison">
            <select data-testid="column-filter" onChange={ handleColumn }>
              {colums.map((element) => <option key={ element }>{ element }</option>)}
            </select>
            <select data-testid="comparison-filter" onChange={ handleComparison }>
              <option>maior que</option>
              <option>menor que</option>
              <option>igual a</option>
            </select>
            <input
              defaultValue="0"
              type="number"
              data-testid="value-filter"
              onChange={ handleNumber }
            />
            <button
              type="button"
              data-testid="button-filter"
              onClick={ handleButton }
            >
              Filtrar
            </button>
          </div>
        </div>
        <CustomFilters />
      </div>
    </div>
  );
};

export default Filters;
