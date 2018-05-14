import styled from 'styled-components';

const NavBarStyle = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
align-items: center;
padding: 0 20px;
img{
  height: 40px;
}
> section{
  display: flex;
  align-items: center;
  > div{
    margin-right: 20px;
  }
  > div:last-child{
    margin-right: 0;
  }
  .ant-select-selection{
    border: 0;
    border-bottom: 1px solid;
    border-radius: 0;
    width: 200px;
    outline: 0;
  }
}


`;

export default NavBarStyle;
