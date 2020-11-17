// import { v4 as uuidv4 } from 'uuid';

// const initialState = {
//   isFetching: false,
//   planets: [
//     { name: 'Tattoine', id: uuidv4() }
//   ],
//   error: '',
// };

// export const planetReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'REQUEST_PLANETS':
//       return { ...state, isFetching: true };
//     case 'GET_PLANETS':
//       return {
//         ...state,
//         planets: action.payload,
//         isFetching: false,
//       };
//     case 'FAILED_REQUEST':
//       return {
//         ...state,
//         error: action.payload,
//         isFetching: false,
//       }
//     default:
//       return state;
//   }
// }
