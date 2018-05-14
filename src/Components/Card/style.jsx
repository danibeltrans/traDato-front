import styled from 'styled-components';

const CardStyle = styled.div`
display: inline-block;
margin: 0 10px;
width: 250px;
.cardHeader{
  display: flex;
  justify-content: space-between;
  text-align: right;
  border-bottom: 1px solid;
  padding-bottom: 15px;
  align-items: center;
  .passDiv{
    height: 80px;
    width: 80px;
    text-align: center;
    padding: 20px 0;
    &.passed{
      background: lawngreen;
    }
    &.failed{
      background: red;
    }
  }
  p{
    margin: 0;
  }
}
`;

export default CardStyle;
