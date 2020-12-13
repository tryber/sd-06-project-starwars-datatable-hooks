import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function FilterName() {
  const { dataApi, setFilterName } = useContext(DataContext);
  const zero = 0;
  return (
    <div>
      {dataApi.length !== zero && (
        <div>
          <input
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

export default FilterName;
