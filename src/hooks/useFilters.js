import { useContext, useEffect, useState } from 'react';
import starContext from '../context/starContext';

const useFilters = () => {
  const { data, setFilteredData } = useContext(starContext);

  const [filters, setFilters] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [],
      filterColumns: {
        default: 'Selecione coluna',
        population: 'Population',
        orbital_period: 'Orbital period',
        diameter: 'Diameter',
        rotation_period: 'Rotation period',
        surface_water: 'Surface water',
      },
    },
  });

  useEffect(() => {
    const { filters: currFilters } = filters;
    const filterByText = currFilters.filterByName.name.toLowerCase();
    const nullValue = 0;
    const validFilterByValue = currFilters.filterByNumericValues.length > nullValue;

    const filteredByName = (filterByText !== '')
      ? data.results.filter(
        (planet) => planet.name.toLowerCase().includes(filterByText),
      )
      : data.results;

    function comparisonOperator(column, op, value) {
      const columnValue = parseFloat(column);
      const parsedValue = parseFloat(value);
      let result = false;

      switch (op) {
      case 'Maior que':
        result = columnValue > parsedValue;
        break;
      case 'Menor que':
        result = columnValue < parsedValue;
        break;
      case 'Igual a':
        result = columnValue === parsedValue;
        break;
      default:
        break;
      }

      console.log(result);
      return result;
    }

    const filteredList = (validFilterByValue)
      ? filteredByName.filter(
        (planet) => currFilters.filterByNumericValues.reduce(
          (result, currentFilter) => (
            (result === false)
              ? false
              : comparisonOperator(
                planet[currentFilter.column],
                currentFilter.comparison,
                currentFilter.value,
              )
          ),
          true,
        ),
      )
      : filteredByName;

    console.log(currFilters.filterByNumericValues);

    setFilteredData({ results: filteredList });
  }, [filters]);

  return [filters, setFilters];
};

export default useFilters;
