import React, { useContext, useState, useEffect } from 'react';

import StarWarsContext from '../context/StarWarsContext';

// tablefilter é o filtro que deve ser retirado
function Filters() {
  const {
    // filters: { filters },
    filterExcludeData,
    data,
    setData,
    context: { tableFilter },
  } = useContext(StarWarsContext);
  // const [newFilter, setNewFilter] = useState([filters.filterByNumericValues]);
  const [selectedColumn, setSelectedColumn] = useState([]);
  // const [isChange, setIsChange] = useState(false);
  const [allFilterDeleted, setAllFilterDeleted] = useState([]);
  // const [teste, setTeste] = useState([]);

  const deleteFilter = (column) => {
    console.log(data);
    console.log(tableFilter);

    setData(data.concat([...filterExcludeData]));
    setSelectedColumn([...selectedColumn, column]);
    console.log(column);
  };
  useEffect(() => {
    setAllFilterDeleted([...allFilterDeleted, ...filterExcludeData]);
    console.log(allFilterDeleted);
    console.log('efeito do effect filterExcludeData');
  }, [filterExcludeData]);

  useEffect(() => {
    console.log(allFilterDeleted);
    console.log('efeito do effect allFilterDeleted');
  }, [allFilterDeleted]);

  const deleteFilterFromTheScreen = () => {
    console.log(tableFilter);
    console.log(selectedColumn);
    return tableFilter
      .filter((category) => selectedColumn
        .filter((cat2) => cat2 !== category.column))
      .map((planet) => (
        <div key={ planet.column }>
          <p>{`${planet.column} ${planet.comparison} ${planet.value}`}</p>
          <button type="button">X</button>
        </div>));
  };

  const handleOnClick = (column) => {
    deleteFilter(column);
    deleteFilterFromTheScreen();
    // setIsChange(true);
    console.log('efeito do handleOnclick');
    console.log(allFilterDeleted);
  };

  useEffect(() => {
    console.log(tableFilter);
    // console.log(filters.filters.filterByNumericValues);
  }, [selectedColumn], []);

  // useEffect(()=>{
  //   deleteFilterFromTheScreen();
  // })
  const renderFilter = () => (tableFilter ? tableFilter
    .map((planet) => (
      <div key={ planet.column }>
        <p>{`${planet.column} ${planet.comparison} ${planet.value}`}</p>
        <button onClick={ () => handleOnClick(planet.column) } type="button">X</button>
      </div>)) : '');

  return renderFilter();
}

export default Filters;
