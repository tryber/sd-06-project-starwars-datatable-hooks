function removeItemFromArray(array, itemName) {
  return array.filter((item) => (
    item !== itemName
  ));
}

export default removeItemFromArray;
