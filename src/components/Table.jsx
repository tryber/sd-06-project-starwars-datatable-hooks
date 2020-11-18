import React from 'react';
import Header from './Header';
import PlanetsTable from './PlanetsTable';

class Table extends React.Component {
  render() {
    return (
      <div>
        <table>
          <Header />
          <PlanetsTable />
        </table>
      </div>
    );
  }
}
export default Table;
