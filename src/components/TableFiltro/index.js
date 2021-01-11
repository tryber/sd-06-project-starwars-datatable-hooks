import React, { useContext, useState } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

import StyledFilter from './styled';
import logoStarWars from './logo-star-wars.png';

const FilterTable = () => {
  const { stateStarWars, setStarWars } = useContext(StarWarsContext);
  const [stateSort] = useState({
    column: '',
    sort: '',
  });

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
        order: {
          column: stateSort.column,
          sort: stateSort.sort,
        },
      },
      },
    );
  };

  // const sort = (submitEvent) => {
  //   submitEvent.preventDefault();

  //   // console.log(stateSort)
  //   // setStarWars({
  //   //   ...setStarWars,
  //   //   filters: {
  //   //     order: {
  //   //       column: stateSort.column,
  //   //       sort: stateSort.sort,
  //   //     }
  //   //   }
  //   // })
  // }

  return (
    <StyledFilter>
      {/* {console.log(stateStarWars.filters
        && stateStarWars.filters.filterByNumericValues[0].column)} */}
      {/* {console.log(stateStarWars)} */}
      <div className="main-filter">
        <span>Filtre os planetas de Star Wars preenchendo os campos abaixo</span>
        <div className="container-filters">
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
          {stateStarWars.abiliyX
                && (
                  <section data-testid="filter" className="button-x">
                    <button
                      type="button"
                      className="button-x"
                      onClick={ stateStarWars.deleteFilters }
                    >
                      X
                    </button>
                  </section>
                ) }
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
          {stateStarWars.abiliyX
                && (
                  <section data-testid="filter" className="button-x">
                    <button
                      type="button"
                      className="button-x"
                      onClick={ stateStarWars.deleteFilters }
                    >
                      X
                    </button>
                  </section>
                ) }
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
          {stateStarWars.abiliyX
            && (
              <section data-testid="filter" className="button-x">
                <button
                  className="button-x"
                  type="button"
                  onClick={ stateStarWars.deleteFilters }
                >
                  X
                </button>
              </section>
            ) }
          <button
            type="button"
            data-testid="button-filter"
            onClick={ stateStarWars.filterByParameters }
          >
            Filtrar
          </button>

          {/* <form onSubmit={ valueInputFilter }>
            <label htmlFor="value">
              Ordene por coluna:
              <select
                id="value"
                name="comparison"
                className="select-value"
                data-testid='column-sort'
                onChange={ ({ target: { value } }) => setSort({
                  ...stateSort,
                  column: value,
                }) }
              >
                <option>{}</option>
                <option>population</option>
                <option>orbital_period</option>
                <option>diameter</option>
                <option>rotation_period</option>
                <option>surface_water</option>
              </select>
            </label>
            <label className="label-radio" htmlFor="order">
              ASC
              <input
                id="order"
                type="radio"
                name="order"
                value="ASC"
                data-testid='column-sort-input-asc'
                onChange={ ({ target: { value } }) => setSort({
                  ...stateSort,
                  sort: value,
                }) }
              />
            </label>
            <label className="label-radio" htmlFor="order">
              DESC
              <input
                id="order"
                type="radio"
                name="order"
                value="DESC"
                data-testid='column-sort-input-desc'
                // onChange={ ({ target: { value } }) => console.log(value) }
                onChange={ ({ target: { value } }) => setSort({
                  ...stateSort,
                  sort: value,
                }) }
              />
            </label>
            <button
              type="submit"
              data-testid='column-sort-button'
            >
              Order
            </button>
          </form> */}
        </div>
      </div>
      <img src={ logoStarWars } alt="logoStarWars" />
    </StyledFilter>
  );
};

export default FilterTable;
