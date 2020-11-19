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
      {/* { !stateStarWars.data ? console.log('ainda nao')
        : stateStarWars.data.results.forEach((hhh) => console.log(hhh)) } */}
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
                { Object.values(planet).map((item) => <td key={ item }>{item}</td>) }
              </tr>))}
          </tbody>
        </table>
      )}
    </StyledTable>
  );
};

export default Table;
