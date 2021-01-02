function compareAndFilterArrays(originalArray, exclusionArray) {
  return originalArray.filter((element) => !exclusionArray.includes(element));
}

export default compareAndFilterArrays;
