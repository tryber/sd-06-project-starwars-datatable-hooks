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
    let dataForFiltering = [...data];
    let auxFilter;
    console.log('Original data copy', dataForFiltering);
    if (hasNumericFilters) {
      filterByNumericValues.forEach((currentFilter) => {
        const { column, comparison, value } = currentFilter;
        console.log(column);
        console.log(comparison);
        console.log(value);
        switch (comparison) {
          case 'maior que':
            console.log('>');
            auxFilter = dataForFiltering.filter((planet) => (
              parseInt(planet[column]) > value
            ));
            dataForFiltering = [...auxFilter];
            break;
          case 'menor que':
            console.log('<');
            auxFilter = dataForFiltering.filter((planet) => (
              parseInt(planet[column]) < value
            ));
            dataForFiltering = [...auxFilter];
            break;
          case 'igual a':
            console.log('=');
            auxFilter = dataForFiltering.filter((planet) => (
              parseInt(planet[column]) === value
            ));
            dataForFiltering = [...auxFilter];
            break;
          default:
            console.log('Ocorreu um erro na informação de comparação');
        } 
      });
      
      // return parseInt(planet[columnProp]) === valueProp
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
    
    return dataForFiltering.filter((planet) => (
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
