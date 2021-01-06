import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchFormName() {
  const { filters, setFilters } = useContext(StarWarsContext);

  const handleName = (event) => {
    setFilters({ ...filters, filterByName: { name: event.target.value } });
  };

  return (
    <div>
      <span>Busca por Nome:</span>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleName }
        placeholder="ex:Tatooine"
      />
    </div>
  );
}
