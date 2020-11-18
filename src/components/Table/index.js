import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

import StyledTable from './styled';

import Loading from '../Loading';

const Table = () => {
  const planetsStarWars = useContext(StarWarsContext);
  const { handleApiPlanets, stateStarWars } = planetsStarWars;

  const header = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited',
    'url'];

  useEffect(() => {
    handleApiPlanets();
  }, []);

  return (
    <>
      {console.log(planetsStarWars)}
      <StyledTable>
        <table>
          <thead>
            <tr>
              { header.map((hea) => <th key={hea}>{hea}</th>) }
            </tr>
          </thead>
          <tbody>
            { !stateStarWars.data ? <Loading/> : stateStarWars.data.results.map((planet) =>
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
                <td>{ planet.films.length }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>,
              )
            }
          </tbody>
        </table>
      </StyledTable>
    </>
  );
};

export default Table;
