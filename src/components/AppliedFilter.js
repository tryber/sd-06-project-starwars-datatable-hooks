import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function AppliedFilter(props) {
  const { filter } = props;

  const { deleteFilter } = useContext(StarWarsContext);

  return(
    <div data-testid='filter'>
      { filter.column }
      <button type="button" onClick={ () => deleteFilter(filter.column) }>X</button>
    </div>
  );
}

export default AppliedFilter;
