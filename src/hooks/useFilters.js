import { useContext, useEffect, useState } from 'react';
import starContext from '../context/starContext';

const useFilters = () => {
  const { data, setFilteredData } = useContext(starContext);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ],
    },
  });

  useEffect(() => {
    const { filters: { filterByName: { name } } } = filters;
    const filterValue = name.toLowerCase();

    const filteredList = (filterValue !== '')
      ? data.results.filter(
        (planet) => planet.name.toLowerCase().includes(filterValue),
      )
      : data.results;

    setFilteredData({ results: filteredList });
  }, [filters]);

  return [filters, setFilters];
};

export default useFilters;
