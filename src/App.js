// import React, { useContext, useEffect } from 'react';
// import Tabela from './components/Tabela';
// import SWContext from './context/SWContext';
// import SWProvider from './context/SWProvider';
// // import './App.css';

// function App() {
//   const {
//     isFetching,
//     getPlanetList,
//   } = useContext(SWContext);

//   // função que atualiza os planetas.
//   useEffect(() => {
//     getPlanetList();
//   }, []);

//   return (
//     <SWProvider>
//       <div>
//         <h1 className="header"> StarWars DataTable</h1>
//         {!isFetching ? (
//           <div>
//             <Tabela />
//           </div>
//         ) : <p>Loading...</p>}
//       </div>
//     </SWProvider>
//   );
// }

// export default App;
import React from 'react';

import SWProvider from './context/SWProvider';
// import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <SWProvider>
      <main>
        <Home />
      </main>
    </SWProvider>
  );
}

export default App;
