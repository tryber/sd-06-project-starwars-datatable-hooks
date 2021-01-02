import Styled from 'styled-components';

const styledFilter = Styled.div`
  width: 100%;
  background:  #D3D3D3;
  height: auto;
  display: flex;
  flex-wrap: wrap;

  .main-filter {
    margin-top: 20px;

    span {
      font-size: 28px;
      font-weight: bold;
      margin-left: 30px;
    }
  }

  div{
    weight: 100%;
    margin-left: 10px;

    label {
      margin-left: 20px;
    }

    select {
      margin: 20px 10px;
      padding: 1px 80px 1px 0;
    }

    input {
      margin: 10px 10px
    }

    button {
      padding: 1px 70px 1px 70px;
      margin-left: 20px;
    }
  }

`;

export default styledFilter;
