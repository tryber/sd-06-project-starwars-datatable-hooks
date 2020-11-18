import React from 'react';

import { PlanetProvider } from './planets';

function AppProvider({ children }) {
  return (
    <PlanetProvider>
      {children}
    </PlanetProvider>
  );
}

export default AppProvider;
