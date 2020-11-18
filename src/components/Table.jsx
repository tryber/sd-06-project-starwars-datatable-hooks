import React from 'react';
import Header from './Header';
import Filter from './FilterNumeric';
import FilterNumeric from './Filter';
import PlanetsTable from './PlanetsTable';

class Table extends React.Component {
  render() {
    return (
      <div>
        <table>
          <Filter />
          <FilterNumeric />
          <Header />
          <PlanetsTable />
        </table>
      </div>
    );
  }
}
export default Table;
