const BIGGER_THAN = 'maior que';
const SMALLER_THAN = 'menor que';

const availableColumnFilters = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const availableNumericComparisons = [
  'maior que',
  'menor que',
  'igual a',
];

function compareColumns(columnData, comparison, value) {
  switch (comparison) {
  case BIGGER_THAN:
    return (columnData > Number(value));
  case SMALLER_THAN:
    return (columnData < Number(value));
  default:
    return (Number(columnData) === Number(value));
  }
}

export { availableColumnFilters, availableNumericComparisons, compareColumns };
