import Styled from 'styled-components';

const styledTable = Styled.div`
  width: 100%;
  background: #D3D3D3;
  margin: 0;

  thead tr th {
    border: 1px solid black;
    background: #1C1C1C;
    color: #FFFAFA;
    margin: 0;
  }

  tbody tr td {
    border: 1px solid black;
    text-align: center;
    background: #D3D3D3;
    margin: 0;
  }
`;

export default styledTable;
