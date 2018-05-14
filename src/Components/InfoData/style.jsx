import styled from 'styled-components';

const InfoDataStyle = styled.div`
margin: 10px 0;
max-width: 1000px;
.header{
  height: 45px;
  line-height: 45px;
  font-size: 21px;
  color: white;
  padding: 0 10px;
  &.passed{
    background: deepskyblue;
  }
  &.failed{
    background: red;
  }
}
.contentdiv{
  p{
    font-size: 16px;
    margin-bottom: .5em;
  }
}
`;

export default InfoDataStyle;
