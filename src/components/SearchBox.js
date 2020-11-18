import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBox() {
  const { state, setState } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        onChange={ (e) => {
          setState({ ...state, filters: { filterByName: { name: e.target.value } } });
          // console.log(state);
        } }
      />
    </div>
  );
}

export default SearchBox;
