import React, { useEffect, useContext, useState } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

import PlanetsApi from '../../services/apiStarWars';

import StyledTable from './styled';

import Loading from '../Loading';

const Table = () => {
  const { stateStarWars, setStarWars } = useContext(StarWarsContext);
  const [stateFiltered, setFiltered] = useState();

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

    if (!stateStarWars.data) {
      console.log('ainda nao existe');
    } else {
      const informations = stateStarWars.data.results.map((obj) => Object.values(obj));
      informations.map((info) => info.splice(indexRemove, 1));

      // console.log(stateStarWars.data.results);

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
    setFiltered(false);
  };

  useEffect(() => {
    setStarWars({
      ...stateStarWars,
      filterByParameters,
      deleteFilters,
    });
  }, [stateStarWars.filters]);

  return (
    <StyledTable>
      {/* { stateFiltered && console.log(stateFiltered.planetFilters)} */}
      {/* {console.log(stateFiltered)} */}
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
                  {inform.map((info, index) => <td key={ index }>{info}</td>)}
                </tr>))
              : filterTable().map((inform, i) => (
                <tr key={ i }>
                  {inform.map((info, index) => <td key={ index }>{info}</td>)}
                </tr>))}
          </tbody>
        </table>
      )}
    </StyledTable>
  );
};

export default Table;
