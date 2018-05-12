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
            <Select defaultValue="lucy" >
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="disabled" disabled>Disabled</Select.Option>
              <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select>
          </div>
          <div>
            {DisplayName}
          </div>
          <div>
            <Icon type="logout" /> Sign up
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
