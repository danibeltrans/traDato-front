import styled from 'styled-components';

const SideBarStyle = styled.div`
width: 200px;
float: left;
.ant-menu-inline {
  height: calc(100vh - 60px);
  overflow-y: auto;
  background: #3A74CA;
}
.ant-menu-item-selected{
  background-color: #2b97efff !important;
  width: 90% !important;
  margin: auto;
}
a{
  color: white !important;
}

`;

export default SideBarStyle;
