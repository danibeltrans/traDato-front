import React, { Component } from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBarStyle from './styles';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { location: { pathname } } = this.props;
    return (
      <SideBarStyle>
        <Menu
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.Item key="/admin/BGC">
            <Link to="/admin/BGC">
              <span>BGC</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/admin/database-status">
            <Link to="/admin/database-status">
              <span>Database Status</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/admin/reports">
            <Link to="/admin/reports">
              <span>Reports</span>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="/admin/batch-upload">
            <Link to="/admin/batch-upload">
              <span>Batch Upload</span>
            </Link>
          </Menu.Item> */}
          <Menu.Item key="/admin/account-settings">
            <Link to="/admin/account-settings">
              <span>Account Settings</span>
            </Link>
          </Menu.Item>
        </Menu>
      </SideBarStyle>
    );
  }
}

const mapsToProps = state => ({
  location: state.routing.location,
});

export default connect(mapsToProps)(SideBar);
