import React, { useContext, useEffect } from 'react';
import DataContext from '../context/DataContext';

function Filters() {
  const  { contextValue:{ columnFilter, setColumnFilter,
    comparisonFilter, setComparisonFilter,
    valueFilter, setValueFilter 
  } } = useContext(DataContext);

  const removeFilter = (e) => {
    const id = parseInt(e.target.id);
    
    const arrayColumn = columnFilter.filter((element, index) => index !== id);
    setColumnFilter(arrayColumn);

    const arrayComparison = comparisonFilter.filter((element, index) => index !== id);
    setComparisonFilter(arrayComparison);

    const arrayValue = valueFilter.filter((element, index) => index !== id);
    setValueFilter(arrayValue);
  }

  return (
    <div>
      {columnFilter.map((element, index) => {
        return <button data-testid='filter' key={index} id={index} onClick={(e) => removeFilter(e)}>{`${columnFilter[index]} ${comparisonFilter[index]} que ${valueFilter[index]} x`}</button>
      })}
    </div>
  )
}

export default Filters;
