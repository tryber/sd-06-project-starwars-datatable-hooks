const apiEndpoint = 'https://swapi-trybe.herokuapp.com/api/planets';

// async function fetchPlanets() {
//   const initialResponse = await fetch(apiEndpoint);
//   const { count, results: initialPlanets } = await initialResponse.json();

//   const resultsPerPage = initialPlanets.length;
//   const maxPages = Math.ceil(count / resultsPerPage) - 1;
//   const PAGE_JUMP = 2;

//   const pagesArray = Array.from(
//     { length: maxPages },
//     (_, index) => index + PAGE_JUMP,
//   );

//   const nextPlanets = await Promise.all(pagesArray.map(async (page) => {
//     const pageResponse = await fetch(`${apiEndpoint}/?page=${page}`);
//     const { results: nextResults } = await pageResponse.json();

//     return nextResults;
//   }));

//   const planets = nextPlanets
//     .reduce((acc, planetArray) => [...acc, ...planetArray], initialPlanets);

//   return planets;
// }

async function fetchPlanets() {
  const initialResponse = await fetch(apiEndpoint);
  const { results: initialPlanets } = await initialResponse.json();

  return initialPlanets;
}

export default fetchPlanets;
