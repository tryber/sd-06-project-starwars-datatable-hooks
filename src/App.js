import React from 'react';
import InitialPage from './pages/InitialPage';
import PlanetsContextProvider from './contexts/PlanetsContextProvider';

const App = () => (
  <PlanetsContextProvider>
    <InitialPage />
  </PlanetsContextProvider>
);

export default App;
