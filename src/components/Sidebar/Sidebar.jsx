import React, { Component } from 'react';
// javascript plugin used to create scrollbars on windows
import { NavLink, Link } from 'react-router-dom';
import logo from 'images/logo.png';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import Hidden from 'material-ui/Hidden';
import sidebarStyle from 'assets/jss/material-dashboard-pro-react/components/sidebarStyle';

import SidebarWrapper from './Wrapper';

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAvatar: false,
      openComponents: this.activeRoute('/components'),
      openForms: this.activeRoute('/forms'),
      openTables: this.activeRoute('/tables'),
      openMaps: this.activeRoute('/maps'),
      openPages: this.activeRoute('-page'),
    };
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1;
  }
  openCollapse(collapse) {
    const st = {};
    st[collapse] = !this.state[collapse];
    this.setState(st);
  }
  render() {
    const {
      classes,
      color,
      routes,
      bgColor = 'blue',
      rtlActive,
    } = this.props;
    const {
      logoContent, logoImg, drawerPaper, sidebarWrapper, itemLink,
    } = classes;

    const links = (
      <List className={classes.list}>
        {routes.map((prop) => {
          console.log(prop.redirect);
          if (prop.redirect) {
            return null;
          }
          const { itemText, itemIcon } = classes;
          return (
            <ListItem key={prop.path} className={classes.item}>
              <NavLink to={prop.path} className={`${itemLink} ${this.activeRoute(prop.path) ? classes[color] : ''}`}>
                <ListItemIcon className={itemIcon}>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText
                  primary={prop.name}
                  disableTypography
                  className={itemText}
                />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    );
    const brand = (
      <div className={logoContent}>
        <Link to="/">
          <img src={logo} alt="logo" className={logoImg} />
        </Link>
      </div>
    );
    return (
      <div ref="mainPanel">
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={rtlActive ? 'left' : 'right'}
            open={this.props.open}
            classes={{
              paper: `${drawerPaper} ${classes[`${bgColor} Background`]}`,
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {brand}
            <SidebarWrapper
              className={sidebarWrapper}
              links={links}
            />
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            anchor={rtlActive ? 'right' : 'left'}
            variant="permanent"
            open
            classes={{
              paper: `${drawerPaper} ${classes[`${bgColor} Background`]}`,
            }}
          >
            {brand}
            <SidebarWrapper
              className={sidebarWrapper}
              links={links}
            />
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(sidebarStyle)(Sidebar);
