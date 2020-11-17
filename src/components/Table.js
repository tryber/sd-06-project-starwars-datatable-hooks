import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import getPlanets from '../apiPlanet';
import Cabecalho from './Cabecalho';
import Infos from './Infos';

const NONE = 0;
const NEGATIVE = -1;

const aplicaComparacao = (planet, filter) => {
  const { column, comparison, value } = filter;
  if (comparison === 'maior que') {
    return Number(planet[column]) > Number(value);
  } if (comparison === 'menor que') {
    return Number(planet[column]) < Number(value);
  } if (comparison === 'igual a') {
    return Number(planet[column]) === Number(value);
  }
  return planet;
};

const ordenaPlaneta = (planetas, filterOrder) => {
  const numericColumn = [
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ];
  const { column, sort } = filterOrder;
  if (numericColumn.includes(column.toLowerCase())) {
    if (sort === 'ASC') {
      return planetas.sort((a, b) => a[column.toLowerCase()] - b[column.toLowerCase()]);
    }
    return planetas.sort((a, b) => b[column.toLowerCase()] - a[column.toLowerCase()]);
  }
  if (sort === 'ASC') {
    return planetas.sort(
      (a, b) => (
        a[column.toLowerCase()] < b[column.toLowerCase()] ? NEGATIVE : 1
      ),
    );
  }
  return planetas.sort((a, b) => (
    b[column.toLowerCase()] < a[column.toLowerCase()] ? NEGATIVE : 1
  ));
};

const Table = () => {
  const {
    data,
    setData,
    isFetching,
    setIsFetching,
    nombreProcurado,
    filterByNumericValues,
    filterOrder,
  } = useContext(StarWarsContext);

  useEffect(() => {
    // componentDidMount no redux
    getPlanets().then((resultado) => {
      setData(resultado.results);
      setIsFetching(false);
    });
  }, [setData, setIsFetching]);
  let planetas = data;
  planetas = data.filter(
    (planeta) => planeta.name.toLowerCase()
      .indexOf(nombreProcurado.toLowerCase()) >= NONE,
  );
  filterByNumericValues.forEach((filtro) => {
    planetas = planetas.filter((planeta) => aplicaComparacao(planeta, filtro));
  });
  planetas = ordenaPlaneta(planetas, filterOrder);
  return (
    <div>
      StarWars Datatable with Filters
      <table>
        <Cabecalho />
        {
          // if ternário
          isFetching === false ? planetas.map(
            (batatinha, i) => <Infos key={ `${i}` } batatinha={ batatinha } />,
          ) : null
        }
      </table>
    </div>
  );
};

export default Table;
