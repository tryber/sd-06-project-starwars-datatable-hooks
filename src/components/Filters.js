import React from 'react';
import NumericFilter from './NumericFilter';
import TextFilter from './TextFilter';

function Filters() {
  const submitionHandler = (event) => {
    event.preventDefault();
    console.log('Form submitted')
  };
  return (
    <form onSubmit={ submitionHandler }>
      <TextFilter />
      <NumericFilter />
    </form>
  );
}

export default Filters;
