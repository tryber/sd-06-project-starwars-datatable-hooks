import { useState, useEffect } from 'react';

const usePlanets = () => {
  const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planets, setPlanets] = useState([]);
  const ZERO = 0;
  useEffect(() => {
    async function fetchData() {
      if (planets.length !== ZERO) {
        const results = await fetch(URL_API)
          .then((response) => (response.json())
            .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)
            )));
        setPlanets(results);
      }
    }
    fetchData();
  }, [planets]);
};

export default usePlanets;

/*
import { useState, useEffect } from 'react';

const usePlanets = () => {
  const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planets, setPlanets] = useState([]);
  useEffect(async () => {
    if (planets.length !== 0) {
      const results = await fetch(URL_API)
        .then((response) => (response.json())
          .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)
          )
          ));
      setPlanets(results);
    }
  }, [planets]);
};

Effect callbacks are synchronous to prevent race conditions. Put the async function inside:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetchingeslint(react-hooks/exhaustive-deps) */