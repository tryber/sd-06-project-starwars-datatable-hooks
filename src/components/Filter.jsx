import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Filter() {
  const { returnAPI, setFilterName } = useContext(StarWarsContext);
  const zero = 0;
  return (
    <div>
      {returnAPI.length !== zero && (
        <div>
          <input
            placeholder="Digite o nome do planeta"
            data-testid="name-filter"
            type="text"
            name=""
            onChange={ (event) => setFilterName(
              { filterByName: { name: event.target.value } },
            ) }
          />
        </div>
      )}
    </div>
  );
}

export default Filter;
