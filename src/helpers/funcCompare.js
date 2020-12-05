export default function compare(a, b, column) {
  const zero = 0;
  const minusOne = -1;
  const itemA = a[column].toUpperCase();
  const itemB = b[column].toUpperCase();

  let comparison = zero;

  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = minusOne;
  }
  return comparison;
}
