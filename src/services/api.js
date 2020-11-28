// import { useContext, useEffect } from 'react';
// import StarWarsContext from '../context/StarWarsContext';

function API() {
  // const { setIsFetching, setData, setBackupData } = useContext(StarWarsContext);
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((result) => result.json())
    .then((json) => json);
}

// useEffect(() => {
//   setIsFetching(true);

//   async function fetchData() {
//     await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
//       .then((result) => result.json())
//       .then((json) => {
//         setIsFetching(false);
//         // json.results.map((result) => delete result.name);
//         setData(json);
//         setBackupData(json);
//       });
//   }
//   fetchData();
// }, [setBackupData, setData, setIsFetching]);
// return null;
// }

export default API;
