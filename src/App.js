import React, { useState } from 'react';
import Table from './component/Table';
import StarWarsContext from './context/StarWarsContext';
import fetchApi from './services/fetchApi';

function App() {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const magicValue = 0;
  const [value, setValue] = useState(magicValue);

  const getData = async () => {
    const api = await fetchApi();
    setPlanets(api);
  };

  const state = {
    planets,
    setPlanets,
    getData,
    filters: {
      filterByName: {
        name,
        setName,
      },
      filterByNumericValues: [
        {
          column,
          setColumn,
          comparison,
          setComparison,
          value,
          setValue,
        },
      ],
    },
  };
  return (
    <div>
      {/* 3- criar Provider: Componentes acessa dados. Value state padroniza
       os dados que deverao ser lidos pelos componentes. */}
      <StarWarsContext.Provider value={ state }>
        <Table />
      </StarWarsContext.Provider>
    </div>
  );
}

export default App;
