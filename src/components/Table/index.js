import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

import PlanetsApi from '../../services/apiStarWars';

import StyledTable from './styled';

import Loading from '../Loading';

const Table = () => {
  const { stateStarWars, setStarWars } = useContext(StarWarsContext);

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

    if (!stateStarWars.data) {
      console.log('ainda nao existe');
    } else {
      const informations = stateStarWars.data.results.map((obj) => Object.values(obj));
      informations.map((info) => info.splice(indexRemove, 1));

      return informations;
    }
  };

  const filterTable = () => {
    if (stateStarWars.filters) {
      const valueInputFilter = stateStarWars.filters.filterByName.name;

      if (informationsPlanets()) {
        const filteredPlanet = informationsPlanets()
          .filter((planet) => planet[0].includes(valueInputFilter));

        console.log(filteredPlanet);
        return filteredPlanet;
      }
    }
  };

  return (
    <StyledTable>
      {/* {console.log(filterTable())} */}
      { !stateStarWars.data ? <Loading /> : (
        <table>
          <thead>
            <tr>
              { informationsHeader().map((info) => <th key={ info }>{info}</th>) }
            </tr>
          </thead>
          <tbody>
            {!stateStarWars.filters
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
