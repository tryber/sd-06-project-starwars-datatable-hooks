import React, { useContext, useEffect } from 'react';
import fetchApi from '../services/api';
import '../App.css';
import PlanetContext from '../context/PlanetContext';

function Home() {
  const { planets, setPlanets, filters: { filterByName } } = useContext(PlanetContext);

  const keys = [
    'name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
    'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url',
  ];

  useEffect(() => {
    fetchApi(setPlanets);
  }, []);

  const handleChange = (({ target }) => {
    filterByName.setName(target.value);
  });

  return (
    <div className="App">
      <h1>B A N I D O ! !</h1>
      <form>
        <label htmlFor="nameFilter">
          Nome:
          <input
            data-testid="name-filter"
            id="nameFilter"
            value={ filterByName.name }
            onChange={ handleChange }
          />
        </label>
      </form>
      <table>
        <thead>
          <tr>
            {keys.map((title) => <th key={ title }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {(!planets) ? <h1>LOADING...</h1>
            : planets.filter((name) => name.name.match(filterByName.name))
              .map((item) => (
                <tr key={ item.name }>
                  <td>{ item.name }</td>
                  <td>{ item.rotation_period }</td>
                  <td>{ item.orbital_period }</td>
                  <td>{ item.diameter }</td>
                  <td>{ item.climate }</td>
                  <td>{ item.gravity }</td>
                  <td>{ item.terrain }</td>
                  <td>{ item.surface_water }</td>
                  <td>{ item.population }</td>
                  <td>{ item.films }</td>
                  <td>{ item.created }</td>
                  <td>{ item.edited }</td>
                  <td>{ item.url }</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
