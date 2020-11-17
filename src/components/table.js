import React from 'react';

function Table() {
  return (
    <form>
      <header>
        <h1> Filtro para consultas </h1>
      </header>
      <div>
        <input
          clssName="name"
          value="name"
          type="text"
        />
      </div>
      <div>
        <input
          clssName="name"
          value="rotation_period"
          type="text"
        />
      </div>
      <div>
        <input
          clssName="name"
          value="orbital_period"
          type="text"
        />
      </div>
      <div>
        <input
          clssName="name"
          value="diâmetro"
          type="text"
        />
      </div>
    </form>

  );
}
export default Table;
