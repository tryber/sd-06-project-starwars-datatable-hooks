import React from 'react';
import Table from '../components/Table';
import { PlanetsContext } from '../contexts/PlanetsContextProvider';

const InitialPage = () => (
  <PlanetsContext.Consumer>
    {({ planets }) => {
      const zero = 0;
      if (planets.length === zero) return <div>Loading</div>;
      return <Table planets={ planets } />;
    }}
  </PlanetsContext.Consumer>
);

export default InitialPage;
