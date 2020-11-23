// O APP deste projeto foi criado com base no projeto
// do colega Matheus Coutinho, a quem fico muito agradecido
// por sua solicitude, sem a qual o trajeto seria muito mais
// complicado.

import React from 'react';

import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <StarWarsProvider>
      <main>
        <Home />
      </main>
    </StarWarsProvider>
  );
}

export default App;
