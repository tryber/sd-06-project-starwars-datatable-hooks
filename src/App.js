import React from 'react';
import './App.css';
import PlanetsData from './components/PlanetsData';
import FilterInput from './components/FilterInput';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <main>
      <ContextProvider>
        <header>
          <h1 className="app-title">Star Wars Planet Search!</h1>
        </header>
        <FilterInput />
        <PlanetsData />
      </ContextProvider>
    </main>
  );
}

export default App;
