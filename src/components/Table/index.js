import React, { useEffect, useContext, useState } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

import PlanetsApi from '../../services/apiStarWars';

import StyledTable from './styled';

import Loading from '../Loading';

const Table = () => {
  const { stateStarWars, setStarWars } = useContext(StarWarsContext);
  const [stateFiltered, setFiltered] = useState();
  const [stateSort, setSort] = useState();
  const [stateFilteredSort, setFilteredSort] = useState();

  const handleApiPlanets = async () => {
    const planets = await PlanetsApi();

    setStarWars({
      ...stateStarWars,
      data: planets,
    });
  };

  useEffect(() => {
    handleApiPlanets();
    handleApiPlanets();
  }, []);

  const informationsHeader = () => {
    if (!stateStarWars.data) {
      console.log('ainda nao existe');
    } else {
      const informations = Object.keys(stateStarWars.data.results[0])
        .filter(((info) => info !== 'residents'));

      return informations;
    }
  };

  const informationsPlanets = () => {
    const indexRemove = 9;

    if (stateFiltered) {
      const informations = stateFiltered.planetFilters.map((obj) => Object.values(obj));
      informations.map((info) => info.splice(indexRemove, 1));

      // console.log(informations);

      return informations;
    }

    if (stateFilteredSort) {
      console.log('agora vai');

      if (!stateStarWars.data) {
        console.log('ainda nao existe');
      } else {
        if (stateFilteredSort.sort === 'ASC') {
          const minusOne = -1;

          const sortPlanets = stateStarWars.data.results.sort(
            (a, b) => (
              Number((a[stateFilteredSort.column]) > Number(b[stateFilteredSort.column]))
                ? 1
                : minusOne),
          );
          // console.log(sortPlanets);

          const informations = sortPlanets.map((obj) => Object.values(obj));
          informations.map((info) => info.splice(indexRemove, 1));

          // console.log(informations);

          return informations;
        } if (stateFilteredSort.sort === 'DESC') {
          const minusOne = -1;

          const sortPlanets = stateStarWars.data.results.sort((a, b) => {
            /// ///
            let one;
            if (a[stateFilteredSort.column] === 'unknown') {
              one = minusOne;
            } else {
              one = a[stateFilteredSort.column];
            }
            let two;
            if (b[stateFilteredSort.column] === 'unknown') {
              two = minusOne;
            } else {
              two = b[stateFilteredSort.column];
            }
            /// ///
            if (Number(one) < Number(two)) {
              return 1;
            }
            return minusOne;
          });
            // console.log(sortPlanets);

          const informations = sortPlanets.map((obj) => Object.values(obj));
          informations.map((info) => info.splice(indexRemove, 1));

          // console.log(informations);

          return informations;
        }
      }
    } else if (!stateStarWars.data) {
      console.log('ainda nao existe');
    } else {
      const informations = stateStarWars.data.results.map((obj) => Object.values(obj));
      informations.map((info) => info.splice(indexRemove, 1));

      // console.log(informations);

      return informations;
    }
  };

  const filterTable = () => {
    if (stateStarWars.filters) {
      const valueInputFilter = stateStarWars.filters.filterByName.name;

      if (informationsPlanets()) {
        const filteredPlanet = informationsPlanets()
          .filter((planet) => planet[0].includes(valueInputFilter));

        return filteredPlanet;
      }
    }
  };

  const filterByParameters = () => {
    setStarWars({
      ...stateStarWars,
      abiliyX: true,
      deleteX: false,
    });

    const { column, comparison, value } = stateStarWars.filters.filterByNumericValues[0];

    switch (comparison) {
    case 'maior que':
      return setFiltered({
        planetFilters:
        stateStarWars.data.results
          .filter((planet) => Number(planet[column]) > Number(value)),
      });
    case 'menor que':
      return setFiltered({
        planetFilters:
        stateStarWars.data.results
          .filter((planet) => Number(planet[column]) < Number(value)),
      });
    case 'igual a':
      return setFiltered({
        planetFilters:
        stateStarWars.data.results
          .filter((planet) => planet[column] === value),
      });
    default:
      return '';
    }
  };

  const deleteFilters = () => {
    console.log('delete');
    setFiltered(false);
  };

  useEffect(() => {
    setStarWars({
      ...stateStarWars,
      filterByParameters,
      deleteFilters,
    });
  }, [stateStarWars.filters]);

  const salvingInStateSort = (submitEvent) => {
    submitEvent.preventDefault();

    setFilteredSort(stateSort);
  };

  return (
    <StyledTable>
      {/* { stateFiltered && console.log(stateFiltered.planetFilters)} */}
      {/* {console.log(stateSort)}
      {console.log(stateFilteredSort)} */}
      <form onSubmit={ salvingInStateSort }>
        <label htmlFor="value">
          Ordene por coluna:
          <select
            id="value"
            name="comparison"
            className="select-value"
            data-testid="column-sort"
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
            data-testid="column-sort-input-asc"
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
            data-testid="column-sort-input-desc"
            // onChange={ ({ target: { value } }) => console.log(value) }
            onChange={ ({ target: { value } }) => setSort({
              ...stateSort,
              sort: value,
            }) }
          />
        </label>
        <button
          type="submit"
          data-testid="column-sort-button"
        >
          Order
        </button>
      </form>
      { !stateStarWars.data ? <Loading /> : (
        <table>
          <thead>
            <tr>
              { informationsHeader().map((info) => <th key={ info }>{info}</th>) }
            </tr>
          </thead>
          <tbody>
            { stateFiltered || !stateStarWars.filters
              ? informationsPlanets().map((inform, i) => (
                <tr key={ i }>
                  <td data-testid="planet-name">{inform[0]}</td>
                  <td>{inform[1]}</td>
                  <td>{inform[2]}</td>
                  <td>{inform[3]}</td>
                  <td>{inform[4]}</td>
                  <td>{inform[5]}</td>
                  <td>{inform[6]}</td>
                  <td>{inform[7]}</td>
                  <td>{inform[8]}</td>
                  <td>{inform[9]}</td>
                  <td>{inform[10]}</td>
                  <td>{inform[11]}</td>
                  <td>{inform[12]}</td>
                  {/* {inform.map((info, index) => (
                    <td
                      key={ index }
                      // data-testid="planet-name"
                    >
                      {info}
                    </td>))} */}
                </tr>))
              : filterTable().map((inform, i) => (
                <tr key={ i }>
                  <td data-testid="planet-name">{inform[0]}</td>
                  <td>{inform[1]}</td>
                  <td>{inform[2]}</td>
                  <td>{inform[3]}</td>
                  <td>{inform[4]}</td>
                  <td>{inform[5]}</td>
                  <td>{inform[6]}</td>
                  <td>{inform[7]}</td>
                  <td>{inform[8]}</td>
                  <td>{inform[9]}</td>
                  <td>{inform[10]}</td>
                  <td>{inform[11]}</td>
                  <td>{inform[12]}</td>
                  {/* {inform.map((info, index) => (
                    <td
                      key={ index }
                      data-testid="planet-name"
                    >
                      {info}
                    </td>))} */}
                </tr>))}
          </tbody>
        </table>
      )}
    </StyledTable>
  );
};

export default Table;
