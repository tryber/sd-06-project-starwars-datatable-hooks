import React from 'react';

import AppProvider from './hooks';
import Planets from './pages/Planets';

function App() {
  return (
    <AppProvider>
      <Planets />
    </AppProvider>
  );
}

export default App;
