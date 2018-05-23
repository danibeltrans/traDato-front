import React, { Component } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

var ps;

class SidebarWrapper extends Component {
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.refs.sidebarWrapper, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
    }
  }
  render() {
    const { className, links } = this.props;
    return (
      <div className={className} ref="sidebarWrapper">
        {links}
      </div>
    );
  }
}

export default SidebarWrapper;
