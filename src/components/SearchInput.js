import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SearchInput = () => {
  const {
    setFilterByName,
    filterByNumericValue,
    setFilterByNumericValue,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  } = useContext(StarWarsContext);

  const optionsColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const optionsComparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const handleChangeFilter = (event) => setFilterByName(event.target.value);

  const handleChangeColumn = (event) => setColumn(event.target.value);

  const handleChangeComparison = (event) => setComparison(event.target.value);

  const handleChangeValue = (event) => setValue(event.target.value);

  const handleClickFilter = () => {
    setFilterByNumericValue([
      ...filterByNumericValue,
      { column, comparison, value },
    ]);
  };

  return (
    <div>
      <label htmlFor="nameSearch">
        Filter by Name:
        <input
          type="text"
          name="nameSearch"
          id="nameSearch"
          data-testid="name-filter"
          onChange={ handleChangeFilter }
        />
      </label>
      <br />
      <label htmlFor="columnSelect">
        Filter by Column:
        <select
          name="columnSelect"
          id="columnSelect"
          data-testid="column-filter"
          onChange={ handleChangeColumn }
        >
          {optionsColumn.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparisonSelect">
        Filter by Comparison:
        <select
          name="comparisonSelect"
          id="comparisonSelect"
          data-testid="comparison-filter"
          onChange={ handleChangeComparison }
        >
          {optionsComparison.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          ))}
        </select>
      </label>
      <label htmlFor="valueSearch">
        Filter by Value:
        <input
          type="number"
          name="valueSearch"
          id="valueSearch"
          data-testid="value-filter"
          onChange={ handleChangeValue }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
      >
        Filter
      </button>
    </div>
  );
};

export default SearchInput;
