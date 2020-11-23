const dataAPI = async () => {
  const getApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
  const data = await getApi.json();
  return data;
};

export default dataAPI;
