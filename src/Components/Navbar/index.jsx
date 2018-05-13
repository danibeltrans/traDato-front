import React, { Component } from 'react';
import { Select, Icon } from 'antd';
import { connect } from 'react-redux';
import NavBarStyle from './styles';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user: { DisplayName } } = this.props;
    return (
      <NavBarStyle>
        <div>
          Img
        </div>
        <section>
          <div>
            <Select defaultValue="Mexico" >
              <Select.Option value="Mexico">Mexico</Select.Option>
              <Select.Option value="Colombia">Colombia</Select.Option>
              <Select.Option value="USA">Estados Unidos</Select.Option>
            </Select>
          </div>
          <div>
            {DisplayName}
          </div>
          <div>
            <Icon type="logout" /> Sign out
          </div>
        </section>
      </NavBarStyle>
    );
  }
}
const mapsToProps = state => ({
  user: state.user,
});

export default connect(mapsToProps)(NavBar);
