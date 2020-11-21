import React from 'react';
import InputFilterByName from '../InputFilterByName';
import InputFilterByNumeric from '../InputFilterByNumeric';

function InputFilterBar() {
  return (
    <form>
      <InputFilterByName />
      <InputFilterByNumeric />
    </form>
  );
}

export default InputFilterBar;
