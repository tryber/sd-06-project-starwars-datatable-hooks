import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { data, setData, backupData } = useContext(StarWarsContext);

  function handleChange(e) {
    let filtered;
    if (e.target.value !== '') {
      filtered = data.results.filter((result) => result.name.toLowerCase().includes(e.target.value.toLowerCase()));
    } else {
      filtered = backupData.results;
    }
    setData({
      ...data,
      results: filtered,
    });
  }

  return (
    <div>
      <input
        type="text"
        onChange={ handleChange }
        placeholder="Search by name"
        data-testid="name-filter"
      />
    </div>
  );
}

export default Filters;
