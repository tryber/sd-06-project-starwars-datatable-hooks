export default async function APIFetcher() {
  const response = await fetch('https://swapi.dev/api/planets');
  const data = await response.json();
  return data.results;
}
