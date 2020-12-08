import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchSelected() {
  const { setSearchTerm, searchTerm } = useContext(StarWarsContext);

  // const aboutArray = ['population', 'orbital_period',
  //   'diameter', 'rotation_period', 'surface_water'];
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
    console.log(index);
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

  return (
    <div className="form-group">
      <br />
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
    </div>
  );
}

export default SearchSelected;
