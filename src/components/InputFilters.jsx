import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function InputFilters() {
  const { contextValue: { 
    handleChange,
    columnFilter, setColumnFilter,
    comparisonFilter, setComparisonFilter,
    valueFilter, setValueFilter,
    data,
    setResult,
  } } = useContext(DataContext);

  const dinamicFilter = () => {
    let resultFilter = [];
    if (comparisonFilter === 'maior') {
      resultFilter = data.filter(element => parseInt(element[columnFilter], 10) > parseInt(valueFilter, 10))
      setResult(resultFilter);
    } else if (comparisonFilter === 'menor') {
      resultFilter = data.filter(element => parseInt(element[columnFilter], 10) < parseInt(valueFilter, 10))
      setResult(resultFilter);
    } else {
      resultFilter = data.filter(element => parseInt(element[columnFilter], 10) === parseInt(valueFilter, 10))
      setResult(resultFilter);
    }
  }

  return (
    <form>
      <div>
        <input type="text" data-testid='name-filter' onChange={ handleChange } />
      </div>
      <div>
        <select data-testid='column-filter' onChange={e => setColumnFilter(e.target.value)}>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid='comparison-filter' onChange={e => setComparisonFilter(e.target.value)}>
          <option value="maior">maior que</option>
          <option value="menor">menor que</option>
          <option value="igual">igual a</option>
        </select>
        <input type="text" data-testid='value-filter' onChange={e => setValueFilter(e.target.value)} />
        <button type="button" data-testid='button-filter' onClick={dinamicFilter}>Filtrar</button>
      </div>
    </form>
  );
}

export default InputFilters;
