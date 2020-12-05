import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Loading from './Loading';

function Table() {
  const {
    data,
    tableHeaders,
    isFetching,
    filters,
    hasNumericFilters,
    makeInitialSetup,
    generateFilteredData,
    // mockedInitialSetup,
  } = useContext(StarWarsContext);

  const { filters: { filterByName: { name: planetSearch  } } } = filters;
  const { filters: { filterByNumericValues } } = filters;
  useEffect(() => {
    makeInitialSetup();
    // mockedInitialSetup();
  }, []);

  const getFilteredPlanetsByUser = () => {
    if (hasNumericFilters) {
      console.log('Filter by numeric values', filterByNumericValues);
      console.log('Elemento do numeric filter', filterByNumericValues[0]);
      console.log('Prop do numeric filter', filterByNumericValues[0].column);
      data.forEach((planet) => {
        const columnProp = filterByNumericValues[0].column;
        const valueProp = filterByNumericValues[0].value;
        console.log('Column prop', columnProp);
        console.log('Value prop' ,valueProp);
        console.log(typeof valueProp);
        console.log('Prop dinamicamente', planet[columnProp]);
        console.log(typeof planet[columnProp]);
        console.log(parseInt(planet[columnProp]) === parseInt(valueProp));
      });
      const filteredResults = data.filter((planet) => {
        const columnProp = filterByNumericValues[0].column;
        const valueProp = filterByNumericValues[0].value;
        return parseInt(planet[columnProp]) === parseInt(valueProp)
      });
      console.log('Filtered Results:', filteredResults);
      // Agora foi, eram strings os dois valores de comparação
      // chamar:
      // const columnProp = filterByNumericValues[0].column;
      // const valueProp = filterByNumericValues[0].value;
      // Criar um array externo, que vai ser alterado a cada
      // caso do forEach.
      // Passar essa lógica de volta pro Provider
    }
    hasNumericFilters
      ? console.log('Provider informou que TEM filtros')
      : console.log('Provider informou que NÃO tem filtros')
    return data.filter((planet) => (
      
      planet.name.toLowerCase().includes(planetSearch.toLowerCase())
    ))
  };

  const renderTable = () => (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders.map((tableHeader, index) => (
            <th key={ index } scope="col">{ tableHeader }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {getFilteredPlanetsByUser().map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((planetValue, index) => (
              <td key={ index }>{ planetValue }</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      { isFetching ? <Loading /> : renderTable()}
    </div>
  );
}

export default Table;
