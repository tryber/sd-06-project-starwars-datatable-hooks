import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const { data, setDataShowed } = useContext(StarWarsContext);
  const [inputText, setInputText] = useState('');

  const handleChange = ({ target }) => {
    setInputText(target.value);
  };

  useEffect(() => {
    const dataToBeShowed = [...data].filter((planet) => planet.name.includes(inputText));
    setDataShowed(dataToBeShowed);
  }, [inputText]);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ inputText }
        onChange={ handleChange }
      />
    </div>
  );
}

export default Form;
