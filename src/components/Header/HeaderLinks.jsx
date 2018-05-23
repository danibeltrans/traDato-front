import React from 'react';
import classNames from 'classnames';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

// @material-ui/icons
import Person from '@material-ui/icons/Person';
import Dashboard from '@material-ui/icons/Dashboard';

import headerLinksStyle from 'assets/jss/material-dashboard-pro-react/components/headerLinksStyle';

class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, rtlActive } = this.props;
    const wrapper = classNames({
      [classes.wrapperRTL]: rtlActive,
    });
    return (
      <div className={wrapper}>
        <IconButton
          color="inherit"
          aria-label="Dashboard"
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          classes={{
            label: rtlActive ? classes.labelRTL : '',
          }}
        >
          <Dashboard className={rtlActive ? `${classes.links} ${classes.linksRTL}` : classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>
              {rtlActive ? 'لوحة القيادة' : 'Dashboard'}
            </p>
          </Hidden>
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="Person"
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          classes={{
            label: rtlActive ? classes.labelRTL : '',
          }}
        >
          <Person className={rtlActive ? `${classes.links} ${classes.linksRTL}` : classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>
              {rtlActive ? 'الملف الشخصي' : 'Profile'}
            </p>
          </Hidden>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
