import React from 'react';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import Card from 'material-ui/Card';
import CardContent from 'material-ui/Card/CardContent';
import CardHeader from 'material-ui/Card/CardHeader';
import CardActions from 'material-ui/Card/CardActions';
import Typography from 'material-ui/Typography';

import statsCardStyle from 'assets/jss/material-dashboard-pro-react/components/statsCardStyle';

function StatsCard({ ...props }) {
  const {
    classes,
    title,
    description,
    statLink,
    small,
    statText,
    statIconColor,
    iconColor,
  } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: `${classes.cardHeader} ${classes[iconColor + "CardHeader"]}`,
          avatar: classes.cardAvatar,
        }}
        avatar={<props.icon className={classes.cardIcon} />}
      />
      <CardContent className={classes.cardContent}>
        <Typography component="p" className={classes.cardCategory}>
          {title}
        </Typography>
        <Typography
          variant="headline"
          component="h2"
          className={classes.cardTitle}
        >
          {description}{' '}
          {small !== undefined ? (
            <small className={classes.cardTitleSmall}>{small}</small>
          ) : null}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.cardStats}>
          <props.statIcon
            className={
              `${classes.cardStatsIcon} ${classes[statIconColor + "CardStatsIcon"]}`
            }
          />{' '}
          {statLink !== undefined ? (
            <a href={statLink.href} className={classes.cardStatsLink}>
              {statLink.text}
            </a>
          ) : statText !== undefined ? (
            statText
          ) : null}
        </div>
      </CardActions>
    </Card>
  );
}

export default withStyles(statsCardStyle)(StatsCard);
