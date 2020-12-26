import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function PlanetTable() {

  const { data, dataApi, searchTerm } = useContext(StarWarsContext);

  const byValue = searchTerm.filters.filterBNumericValues;

  useEffect(() => { dataApi(); }, []);

  function masterFilter() {
    let initialArray = data;
    const magicNumber = 0;
    if (byValue.length === magicNumber) return data;

    byValue.forEach((element) => {
      if (element.comparison === 'maior que') {
        initialArray = initialArray.filter((dataElement) => (
          (element.value < parseInt(dataElement[element.column], 10))));
      }
      if (element.comparison === 'menor que') {
        initialArray = initialArray.filter((dataElement) => (
          (element.value > parseInt(dataElement[element.column], 10))));
      }
      if (element.comparison === 'igual a') {
        initialArray = initialArray.filter((dataElement) => (
          (element.value === dataElement[element.column])));
      }
      return initialArray;
    });
    return initialArray;
  }

  const orderToMe = (a, b) => {
    const numericColumn = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];
    const magicNumber = -1;
    const { column, sort } = searchTerm.filters.order;
    if (numericColumn.includes(column)) {
      if (sort === 'ASC') {
        return (a[column] - b[column]);
      }
      return (b[column] - a[column]);
    }
    if (sort === 'ASC') {
      return (a[column] > b[column] ? 1 : magicNumber);
    }
    return (a[column] < b[column] ? 1 : magicNumber);
  };

  const { filters: { filterByName: { name } } } = searchTerm;

  return (
    <div className="planet-table">
      area da tabela dos planetas
    </div>
  );
}
