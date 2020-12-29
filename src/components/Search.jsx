import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/search.css';

export default function Search() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext);
  const { filters: { filterByName: { name } } } = searchTerm;

  const lengthArray = ['maior que', 'menor que', 'igual a'];
  const [about, setAbout] = useState('population');
  const [lengthType, setLengthType] = useState('maior que');
  const [value, setValue] = useState('');

  function setByValue(filter) {
    setSearchTerm((searchTermParam) => (
      {
        ...searchTermParam,
        filters: { ...searchTermParam.filters,
          filterByNumericValues:
           [...searchTermParam.filters.filterByNumericValues, filter] },
      }
    ));
  }

  function handleInput(valor) {
    const objectInput = {
      ...searchTerm,
      filters: { ...searchTerm.filters,
        filterByName: { name: valor } },
    };
    setSearchTerm(objectInput);
  }

  const setDropDown = () => {
    let aboutArray = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];

    const dropDownArray = searchTerm.filters.filterByNumericValues
      .map((elementDropDown) => Object.values(elementDropDown)[0]);

    aboutArray = aboutArray
      .filter((elementAbout) => !dropDownArray.includes(elementAbout));
    return aboutArray;
  };

  function handleElementX(index) {
    const arrayOfFilters = [...searchTerm.filters.filterByNumericValues]; // filtros salvos
    arrayOfFilters.splice(index, 1); // retiro filtro usando o index advindo do x
    setSearchTerm((searchTermParam) => (
      {
        ...searchTermParam,
        filters: { ...searchTermParam.filters,
          filterByNumericValues: arrayOfFilters },
      }
    ));
  }
  const sortArray = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films',
    'created', 'edited', 'url',
  ];
  const [radio, setRadio] = useState('ASC');
  const [columnRadio, setColumnRadio] = useState('Name');
  function handleSort() {
    setSearchTerm((searchTermParam) => (
      {
        ...searchTermParam,
        filters: { ...searchTermParam.filters,
          order: {
            column: columnRadio,
            sort: radio,
          } },
      }
    ));
  }

  return (
    <div className="search">
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="form-control"
          data-testid="name-filter"
          onChange={ (ev) => handleInput(ev.target.value) }
          value={ name }
        />
      </div>
      <select
        data-testid="column-filter"
        onChange={ (event) => setAbout(event.target.value) }
      >
        {setDropDown().map((aboutElement, index) => (
          <option
            className="btn btn-secondary btn-lg dropdown-toggle"
            key={ index }
            value={ aboutElement }
          >
            { aboutElement }
          </option>))}
      </select>
      {' '}
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setLengthType(event.target.value) }
      >
        {lengthArray.map((lengthElement, index) => (
          <option
            className="btn btn-secondary btn-lg dropdown-toggle"
            key={ index }
            value={ lengthElement }
          >
            { lengthElement }
          </option>))}
      </select>
      {' '}
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setValue(event.target.value) }
      />
      {' '}
      <button
        data-testid="button-filter"
        type="button"
        className="btn btn-success"
        onClick={ () => {
          if (value === '' || about === '') return;
          setByValue({ column: about, comparison: lengthType, value });
          setAbout(setDropDown()[1]);
        } }
      >
        Filter
      </button>
      <br />
      <div>
        {' '}
        { searchTerm.filters.filterByNumericValues.map((elementX, index) => (
          <div key={ index } data-testid="filter">
            <button
              type="button"
              onClick={ () => handleElementX(index) }
            >
              X
            </button>
            { `${elementX.column} ${elementX.comparison} ${elementX.value}` }
          </div>
        )) }
      </div>
      {' '}
      <select
        data-testid="column-sort"
        onChange={ (event) => setColumnRadio(event.target.value) }
      >
        {sortArray.map((sortElement, index) => (
          <option
            className="btn btn-secondary btn-lg dropdown-toggle"
            key={ index }
            value={ sortElement }
          >
            { sortElement }
          </option>))}
      </select>
      <label htmlFor="ascending">
        <input
          id="ascending"
          type="radio"
          name="sort"
          data-testid="column-sort-input-asc"
          value="ASC"
          onClick={ () => setRadio('ASC') }
        />
        Crescente
      </label>
      <label htmlFor="descending">
        <input
          id="descending"
          type="radio"
          name="sort"
          data-testid="column-sort-input-desc"
          value="DESC"
          onClick={ () => setRadio('DESC') }
        />
        Decrescente
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleSort }
      >
        Sort
      </button>
    </div>
  );
}
