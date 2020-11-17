import React, { useEffect, useContext } from 'react';
import Api from '../service/Api';
import { StarWarsContext } from '../context/StarWarsContext';
import Planet from './Planet';

const VAZIO = 0;
const NEGATIVO = -1;

function filtrando(byNumeric, planets) {
  let finalPlanets = [...planets];
  if (byNumeric.length > VAZIO) {
    byNumeric.forEach((filtro) => {
      const { column, comparison, value } = filtro;
      if (comparison === 'maior que') {
        finalPlanets = finalPlanets.filter(
          (planeta) => +planeta[column] > +value,
          // Esse sinal de mais força a transformação de uma string em número
        );
      } else if (comparison === 'menor que') {
        finalPlanets = finalPlanets.filter(
          (planeta) => +planeta[column] < +value,
        );
      } else {
        finalPlanets = finalPlanets.filter(
          (planeta) => +planeta[column] === +value,
        );
      }
    });
  }
  return finalPlanets;
}

// prettier-ignore
function funcaoOrdenar(planetas, order) {
  const { sort, column } = order;
  const literal = [
    'name',
    'climate',
    'gravity',
    'terrain',
    'films',
    'created',
    'edited',
    'url',
  ];
  const Column = column.toLowerCase();
  if (literal.some((coluna) => coluna === Column)) {
    if (sort === 'ASC') {
      return planetas.sort((a, b) => (b[Column] < a[Column] ? 1 : NEGATIVO));
    }
    return planetas.sort((a, b) => (b[Column] > a[Column] ? 1 : NEGATIVO));
  }
  if (sort === 'ASC') {
    return planetas.sort((a, b) => (1 * a[Column]) - (1 * b[Column]));
  }
  return planetas.sort((a, b) => (1 * b[Column]) - (1 * a[Column]));
}

// const { filters } = this.props;

export default function Body() {
  const {
    setIsFetching,
    planets,
    setPlanets,
    filterByNumericValues,
    filterByName,
    ordenar,
    order,
  } = useContext(StarWarsContext);

  let filterPlanets = filtrando(filterByNumericValues, planets);

  filterPlanets = filterPlanets.filter((planeta) => planeta.name.includes(filterByName));
  if (ordenar) {
    filterPlanets = funcaoOrdenar(filterPlanets, order);
  }

  useEffect(() => {
    setIsFetching(true);
    Api().then((response) => setPlanets(response.results));
    setIsFetching(false);
  }, [setIsFetching, setPlanets]);

  return (
    <tbody>
      {filterPlanets.map((planeta) => (
        <Planet key={ planeta.name } planeta={ planeta } />
      ))}
    </tbody>
  );
}
