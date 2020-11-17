export const fetchAPI = () => {
  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then(results => results.json())
    .then(data => console.log(data));
}
