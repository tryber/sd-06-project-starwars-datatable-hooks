import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function EntryText() {
  const initFiters = {
    filterByNumericValues:
      {
        column: '',
        comparison: '',
        value: '',
      },
  };
  const { handle, entryText, filtersFunc } = useContext(StarWarsContext);
  const [filters, setFilters] = useState(initFiters);

  function handleChange(event, input) {
    const filter = event.target.value;
    setFilters((prevState) => (
      { filterByNumericValues: { ...prevState.filterByNumericValues, [input]: filter },
      }));
    // this.setState({
    //   form: { ...form, [input]: event.target.value },
    // });
    // if (input === 'currency') {
    //   const curName = currencys.filter((curren) => curren.code === event.target.value)
    //     .flatMap((currName) => currName.name);
    //   this.setState({ form:
    //     { ...form, currencyName: curName[0], [input]: event.target.value },
    //   });
    // }
  }

  function handleClick() {
    const { value, column, comparison } = filters.filterByNumericValues;
    filtersFunc(column, comparison, value);
    console.log(comparison + column + value);
  }

  return (
    <div>
      <label htmlFor="entry-text">
        Filter for Text :
        <input
          data-testid="name-filter"
          value={ entryText }
          type="text"
          placeholder="digite text"
          onChange={ handle }
        />
      </label>
      <label htmlFor="col-filter">
        selcione um coluna
        <select
          data-testid="column-filter"
          id="col-filter"
          onChange={ (event) => handleChange(event, 'column') }
        >
          <option value="population">
            population
          </option>
          <option value="orbital_period">
            orbital_period
          </option>
          <option value="diameter">
            diameter
          </option>
          <option value="rotation_period">
            rotation_period
          </option>
          <option value="surface_water">
            surface_water
          </option>
        </select>
      </label>

      <label htmlFor="faixa-filter">
        faixa de valor
        <select
          data-testid="comparison-filter"
          id="faixa-filter"
          onChange={ (event) => handleChange(event, 'comparison') }
        >
          <option value="maior que">
            maior que
          </option>
          <option value="menor que">
            menor que
          </option>
          <option value="igual a">
            igual a
          </option>
        </select>
      </label>
      <label htmlFor="enter-number">
        <input
          data-testid="value-filter"
          id="enter-number"
          type="number"
          placeholder="digite um valor"
          onChange={ (event) => handleChange(event, 'value') }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>);
}

export default EntryText;
