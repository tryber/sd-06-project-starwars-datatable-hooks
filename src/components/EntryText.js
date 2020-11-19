import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function EntryText() {
  const { handle, entryText } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="entry-text">
        Filter for Text :
        <input
          data-testid="name-filter"
          value={ entryText }
          type="text"
          placeholder="digite text"
          onChange={ handle }
        />
      </label>
    </div>);
}

export default EntryText;
