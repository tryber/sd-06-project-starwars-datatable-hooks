import testData from '../testData';

function mockFetchPlanetsInfo() {
  console.log('Mocked API', testData);
  return testData.results;
}

export default mockFetchPlanetsInfo;
