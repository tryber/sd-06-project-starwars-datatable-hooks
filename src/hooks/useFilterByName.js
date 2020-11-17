import { useContext, useEffect } from 'react';
import starContext from '../context/starContext';

const useFilterByName = () => {
  const { data, filters, setFilteredData } = useContext(starContext);
  const { filters: { filterByName: { name } } } = filters;

  useEffect(() => {
    const filterValue = name.toLowerCase();

    const filteredList = (filterValue !== '')
      ? data.results.filter(
        (planet) => planet.name.toLowerCase().includes(filterValue),
      )
      : data.results;

    setFilteredData({ results: filteredList });
  }, [name]);
};

export default useFilterByName;
