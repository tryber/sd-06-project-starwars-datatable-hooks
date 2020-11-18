import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Input from '../components/Input';
import Table from '../components/Table';

export default function Home() {
  const { filters, handleInputChange } = useContext(StarWarsContext);

  return (
    <div>
      <Input
        id="name"
        testId="name-filter"
        name="name"
        className="input-name"
        type="text"
        place="Digite o nome do Planeta"
        value={ filters.filterByName.name }
        onChange={ (e) => handleInputChange(e.target.value) }
      />
      <Table />
    </div>
  );
}
