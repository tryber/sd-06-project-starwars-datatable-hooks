import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import NumericFilter from './NumericFilter';
import TextFilter from './TextFilter';

function Filters() {
  return (
    <div>
      <TextFilter />
      <NumericFilter />
    </div>
  );
}

export default Filters;
