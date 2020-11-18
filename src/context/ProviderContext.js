import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function ProviderContext({ children }) {
  const [data, setData] = useState({});
  const [copyDataResultsTable, setCopyDataResultsTable] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  // useEffect(() => console.log(filterByNumericValues), [filterByNumericValues])
  const [arrayOptionsColumn, setArrayOptionsColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    const objVoid = 0;
    if (Object.keys(data).length !== objVoid) {
      // console.log('chamou mudou copyDataResults')
      let copyDataResults = data.results.map((result) => ({ ...result }));
      copyDataResults.forEach((objPlanet) => {
        delete objPlanet.residents;
      });
      if (name !== '') {
        const nameUpperCase = name.toUpperCase();
        const filterByName = copyDataResults
          .filter((objPlanet) => objPlanet.name.toUpperCase().includes(nameUpperCase));
        copyDataResults = filterByName;
      }
      const arrayVoid = 0;
      if (filterByNumericValues.length > arrayVoid) {
        const filterByNumber1 = filterByNumericValues.reduce((total, { column, comparison, value }, index) => {
          // console.log('super test', (index !== 0 ? console.log('total foi') : console.log('filterByName foi')))
          const filterByNumber2 = (index === 0 ? copyDataResults : total).filter((objPlanet) => {
            setArrayOptionsColumn(arrayOptionsColumn
              .filter((optionColumn) => optionColumn !== column));
            let boolTest = false;
            switch (comparison) {
            case 'maior que':
              boolTest = parseInt(objPlanet[column], 10) > parseInt(value, 10);
              break;
            case 'menor que':
              boolTest = parseInt(objPlanet[column], 10) < parseInt(value, 10);
              break;
            case 'igual a':
              boolTest = parseInt(objPlanet[column], 10) === parseInt(value, 10);
              break;
            default:
              break;
            }
            return boolTest;
          });
          // console.log('total', total)
          // console.log('filterByNumber2', filterByNumber2)
          return filterByNumber2;
        }, []);
        copyDataResults = filterByNumber1;
      }
      setCopyDataResultsTable(copyDataResults);
    }
    // console.log('camou data mudou')
  }, [data, name, filterByNumericValues]);

  // useEffect(() => {
  //   if (name !== '') {
  //     const nameUpperCase = name.toUpperCase();
  //     const filterByName = copyDataResultsTable
  //       .filter((objPlanet) => objPlanet.name.toUpperCase().includes(nameUpperCase));
  //     setCopyDataResultsTable(filterByName);
  //   }
  //   console.log("chamou name")
  // }, [name]);

  return (
    <StarWarsContext.Provider
      value={
        {
          dataTable: {
            data,
            setData,
            copyDataResultsTable,
          },
          filters: {
            filterByName: {
              name,
              setName,
            },
            filterNumeric: {
              filterByNumericValues,
              setFilterByNumericValues,
            },
          },
          arrayOptionsColumn }
      }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderContext;
