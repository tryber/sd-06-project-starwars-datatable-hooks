import React, { useState } from 'react';
import MyContext from './MyContext';
import usePlanets from './usePlanets';

const Provider = ({ children }) => {
  const [ isFetching, setFetching ] = useState(true);
  console.log(isFetching);

  const data = usePlanets();

  setFetching(false);
  console.log(isFetching);

  if (isFetching) {
    return ( <div>loading...</div> )
  }
  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
