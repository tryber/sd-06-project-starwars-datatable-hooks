import React from 'react';
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
