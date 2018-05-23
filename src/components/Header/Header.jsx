import React from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Menu from '@material-ui/icons/Menu';
import headerStyle from 'assets/jss/material-dashboard-pro-react/components/headerStyle';
import HeaderLinks from './HeaderLinks';

function Header({ ...props }) {
  function makeBrand() {
    let name;
    props.routes.map((prop) => {
      if (prop.collapse) {
        prop.views.map((item) => {
          if (item.path === props.location.pathname) {
            name = item.name;
          }
          return null;
        });
      }
      if (prop.path === props.location.pathname) {
        name = prop.name;
      }
      return null;
    });
    return name;
  }
  const { classes, rtlActive } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks rtlActive={rtlActive} />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.appResponsive}
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(headerStyle)(Header);
