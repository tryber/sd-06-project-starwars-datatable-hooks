import React from 'react';

import { StarWarsProvider } from './context';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <div>...</div>
    </StarWarsProvider>
  );
}

export default App;
