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

  img {
      margin-top: 13px;
      margin-left: 100px;
      width: 200px;
      height: 90px;
      display: none;
    }

  .container-filters {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  div{
    weight: 100%;

    label {
      margin-top: 20px;
      margin-left: 25px;

      display: flex;
      flex-direction: column;
    }

    select {
      padding: 1px 80px 1px 0;
      margin-bottom: 20px;
    }

    input {
      margin-bottom: 20px;
    }

    button {
      padding: 1px 10px 1px 10px;
      margin-left: 25px;
      margin-top: 18px;
    }

    .button-x {
      display: flex;
      margin: 0;
      margin-left: 3px;
      margin-top: 9px;

  .label-radio {
    display: flex;
  }
      button {
        padding: 1px 5px 1px 5px; 
        margin-right: 0;
    }
  }


`;

export default styledFilter;
