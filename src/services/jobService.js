import jobMock from '../mock/jobMock';

export const fetchJobOffers = async () => {
  // const response = await fetch('https://jobs.github.com/positions.json?page=1&search=javascript');
  // const json = await response.json();
  console.log('Chamou a API');
  return jobMock.response;
}
