import React from 'react';

import Provider from './context/StarWarsProvider';
import Home from './pages/Home';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
