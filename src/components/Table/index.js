import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

import StyledTable from './styled';

import Loading from '../Loading';

const Table = () => {
  const planetsStarWars = useContext(StarWarsContext);
  const { handleApiPlanets, stateStarWars } = planetsStarWars;

  useEffect(() => {
    handleApiPlanets();
  }, []);

  const informationsPlanets = () => {
    if (!stateStarWars.data) {
      console.log('ainda nao existe');
    } else {
      const informationsHeader = Object.keys(stateStarWars.data.results[0])
        .filter(((info) => info !== 'residents'));

      return informationsHeader;
    }
  };

  return (
    <StyledTable>
      { !stateStarWars.data ? <Loading /> : (
        <table>
          <thead>
            <tr>
              { informationsPlanets().map((info) => <th key={ info }>{info}</th>) }
            </tr>
          </thead>
          <tbody>
            { stateStarWars.data.results.map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>))}
          </tbody>
        </table>
      )}
    </StyledTable>
  );
};

export default Table;
