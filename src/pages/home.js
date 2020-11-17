import React, { useContext, useEffect } from 'react';
import fetchApi from '../services/api';
import '../App.css';
import PlanetContext from '../context/PlanetContext';

function Home() {
  const keys = [
    'name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
    'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url',
  ];
  const { planets, setPlanets } = useContext(PlanetContext);
  useEffect(() => {
    fetchApi(setPlanets);
  }, []);
  return (
    <div className="App">
      <h1>B A N I D O ! !</h1>
      <table>
        <thead>
          <tr>
            {keys.map((title) => <th key={ title }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {(!planets) ? <h1>LOADING...</h1>
            : planets.map((item) => (
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
