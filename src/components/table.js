
  import React from 'react';

  function Table() {
    return(
      <form >
        <header>
          <h1> Filtro para consultas </h1>
        </header>
        <div>
          <input clssName="name"
            value="name"
            type="text"
          >
          </input>  
        </div>
        <div>
          <input clssName="name"
            value="rotation_period"
            type="text"
          >
          </input>  
        </div>
        <div>
          <input clssName="name"
            value="orbital_period"
            type="text"
          >
          </input>  
        </div>
        <div>
          <input clssName="name"
            value="diâmetro"
            type="text"
          >
          </input>  
        </div>
      </form>

    )
  }
  export default Table;
  /*  "nome": "Endor", 
            "rotation_period": "18", 
            "orbital_period": "402", 
            "diâmetro": "4900", 
            "clima": "temperado", 
            "gravidade": "padrão 0,85", 
            "terreno": "florestas, montanhas, lagos", 
            "surface_water": "8", 
            "população": "30000000", 
            "moradores": */