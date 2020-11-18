import React, { useContext, useEffect } from 'react';
import fetchApi from '../services/api';
import '../App.css';
import PlanetContext from '../context/PlanetContext';

function Home() {
  const {
    planets, setPlanets, btnFilter, setBtnFilter, filters: { filterByName, filterByNumericValues: [{ column, setColumn, comparison, setComparison, value, setValue }] },
  } = useContext(PlanetContext);

  const columnTitle = [
    'name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
    'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url',
  ];

  const columnFilter = [
    'rotation_period', 'orbital_period', 'diameter', 'surface_water', 'population',
  ];

  useEffect(() => {
    fetchApi(setPlanets);
  }, []);

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
            onChange={({target}) => filterByName.setName(target.value)}
          />
        </label>
        <label htmlFor="filters">
          Escolha o campo:
          <select data-testid="column-filter" name="filters" value={column} onChange={({target}) => setColumn(target.value)}>
            {columnFilter.map((filters) => (
              <option key={filters} value={filters}>{filters}</option>
            ))}
          </select>
          <select data-testid="comparison-filter" name="filters" value={comparison} onChange={({target}) => setComparison(target.value) }>
            <option value=">">maior que</option>
            <option value="<">menor que</option>
            <option value="==">igual a</option>
          </select>
          <input type="number" data-testid="value-filter" value={value} onChange={({target}) => setValue(target.value)} />
        </label>
        <button type="button" data-testid="button-filter" onClick={() => setBtnFilter((btnFilter === true) ? false : true)}>Filtrar</button>
      </form>
      <table>
        <thead>
          <tr>
            {columnTitle.map((title) => <th key={ title }>{ title }</th>)}
          </tr>
        </thead>
        <tbody>
          {(!planets) ? <h1>LOADING...</h1>
            : planets.filter((name) => name.name.match(filterByName.name))
            .filter((filter) => {
              if (btnFilter === true) {
                let result = false;
                if(comparison === '>') {
                  result = filter[column] > parseInt(value);
                } else if (comparison === '<') {
                  result = filter[column] < parseInt(value);
                } else if (comparison === '==') {
                  result = filter[column] == parseInt(value);
                }
                return result
              }
            })
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
                  {console.log(value)}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
