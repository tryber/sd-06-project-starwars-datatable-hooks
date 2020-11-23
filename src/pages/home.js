import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/Table';

function Home() {
  const { data, dataIsEmpty, filters } = useContext(StarWarsContext);
  const [planetsData, setplanetsData] = useState([]);

  useEffect(() => {
    setplanetsData(data);
  }, [data]);

  const handleDataFilters = () => {
    const { filterByName: { name }, filterByNumericValues } = filters;
    const ZERO = 0;

    if (name) {
      const newData = data.filter((planet) => (
        planet.name.toLowerCase().includes(name.toLowerCase())
      ));
      setplanetsData(newData);
    }

    if (filterByNumericValues.length > ZERO) {
      const lastFilter = filterByNumericValues.length - 1;
      const { column, comparison, value } = filterByNumericValues[lastFilter];

      const operator = {
        'maior que': (a, b) => Number(a) > Number(b),
        'menor que': (a, b) => Number(a) < Number(b),
        'igual a': (a, b) => Number(a) === Number(b),
      };

      const newData = data.filter((planet) => (
        (operator[comparison](planet[column], value) && planet[column] !== 'unknown')
          ? planet
          : undefined
      ));

      setplanetsData(newData);
    }

    if (!name && !(filterByNumericValues.length > ZERO)) {
      setplanetsData(data);
    }
  };

  useEffect(() => {
    handleDataFilters();
  }, [filters]);

  return (
    <div>
      <h1>Planets Database</h1>
      { !dataIsEmpty && <Search /> }
      { !dataIsEmpty && <Table data={ planetsData } /> }
      { dataIsEmpty && 'Loading...' }
    </div>
  );
}

export default Home;