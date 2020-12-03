import React from 'react';
import NumericFilter from './NumericFilter';
import TextFilter from './TextFilter';

function Filters() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted')
  };
  return (
    <form onSubmit={ handleSubmit }>
      <TextFilter />
      <NumericFilter />
    </form>
  );
}

export default Filters;
