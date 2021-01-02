import React, { useContext } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

import StyledFilter from './styled';

const FilterTable = () => {
  const { stateStarWars, setStarWars } = useContext(StarWarsContext);
  // const [stateX, setX] = useState();

  const valueInputFilter = (target) => {
    setStarWars(
      {
        ...stateStarWars,
        filters:
      {
        filterByName: {
          name: target.name === 'name'
            ? target.value : stateStarWars.filters.filterByName.name,
        },
        filterByNumericValues: [
          {
            column: target.name === 'column'
              ? target.value : stateStarWars.filters
              && stateStarWars.filters.filterByNumericValues[0].column,
            comparison: target.name === 'comparison'
              ? target.value : stateStarWars.filters
              && stateStarWars.filters.filterByNumericValues[0].comparison,
            value: target.name === 'value'
              ? target.value : stateStarWars.filters
              && stateStarWars.filters.filterByNumericValues[0].value,
          },
        ],
      },
      },
    );
  };

  return (
    <StyledFilter>
      {/* {console.log(stateStarWars.filters
        && stateStarWars.filters.filterByNumericValues[0].column)} */}
      {/* {console.log(stateStarWars)} */}
      <div className="main-filter">
        <span>Filtre os planetas de Star Wars preenchendo os campos abaixo</span>
        <div>
          <label htmlFor="input-search">
            Nome:
            <input
              id="input-search"
              type="text"
              name="name"
              data-testid="name-filter"
              placeholder="Name Planet"
              onChange={ ({ target }) => valueInputFilter(target) }
            />
          </label>
          <label htmlFor="column">
            Coluna:
            <select
              id="column"
              name="column"
              className="select-column"
              data-testid="column-filter"
              onChange={ ({ target }) => valueInputFilter(target) }
            >
              <option>{}</option>
              <option>population</option>
              <option>orbital_period</option>
              <option>diameter</option>
              <option>rotation_period</option>
              <option>surface_water</option>
            </select>
          </label>
          <label htmlFor="value">
            Faixa de valor:
            <select
              id="value"
              name="comparison"
              className="select-value"
              data-testid="comparison-filter"
              onChange={ ({ target }) => valueInputFilter(target) }
            >
              <option>{}</option>
              <option>maior que</option>
              <option>menor que</option>
              <option>igual a</option>
            </select>
          </label>
          <label htmlFor="input-value">
            Valor:
            <input
              id="input-value"
              name="value"
              type="text"
              data-testid="value-filter"
              placeholder="Value"
              onChange={ ({ target }) => valueInputFilter(target) }
            />
          </label>
          {stateStarWars.filters
              && stateStarWars.filters.filterByNumericValues[0].value !== ''
            ? (
              <button
                type="button"
                data-testid="filter"
                onClick={ stateStarWars.deleteFilters }
              >
                X
              </button>
            ) : ''}
          <button
            type="button"
            data-testid="button-filter"
            onClick={ stateStarWars.filterByParameters }
          >
            Filtrar
          </button>
        </div>
      </div>
    </StyledFilter>
  );
};

export default FilterTable;
