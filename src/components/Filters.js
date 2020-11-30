import React from 'react';
import NumericFilter from './NumericFilter';
import TextFilter from './TextFilter';

function Filters() {
  return (
    <form>
      <TextFilter />
      <NumericFilter />
    </form>
  );
}

export default Filters;
