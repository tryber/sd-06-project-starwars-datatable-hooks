const fetchStarWars = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await response.json();
  const lists = json.results;
  // const filteredList = lists.map(
  //   (list) => Object.entries(list).filter(
  //     (key) => key[0] !== 'residents',
  //   ),
  // );
  return lists;
}

export default fetchStarWars;
