import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function EntryText() {
  const listLength = 0;
  const initFiters = {
    filterByNumericValues: [

    ],
  };
  const { handle, entryText, filtersFunc } = useContext(StarWarsContext);
  const [filters, setFilters] = useState(initFiters);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  function handleChange(event, input) {
    const filter = event.target.value;
    if (input === 'column') setColumn(filter);
    if (input === 'comparison') setComparison(filter);
    if (input === 'value') setValue(filter);

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

  function selectVerifyFilters() {
    if (filters.filterByNumericValues.length > listLength) {
      // console.log(filters.filterByNumericValues[0].column);
      if (filters.filterByNumericValues[0].column.includes('population')) {
        const optionSelect = document.querySelector('#population');
        optionSelect.style.visibility = 'hidden';
      }
    }
  }

  useEffect(() => {
    selectVerifyFilters();
  });

  function handleClick() {
    // const { value, column, comparison } = this.state;
    if (column.length > listLength && comparison.length
      > listLength && value.length > listLength) {
      setFilters((prevState) => (
        { filterByNumericValues:
          [...prevState.filterByNumericValues, { value, comparison, column }],
        }));
    }
    filtersFunc(column, comparison, value);
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
          <option value="">
            Selecione
          </option>
          <option id="population" value="population">
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
