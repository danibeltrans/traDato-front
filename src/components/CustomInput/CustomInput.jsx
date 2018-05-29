import React from 'react';
import cx from 'classnames';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';

// @material-ui/icons
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';

import customInputStyle from 'assets/jss/material-dashboard-pro-react/components/customInputStyle';

function CustomInput({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success,
    helpText,
    rtlActive,
  } = props;

  let labelClasses = `${error ? classes.labelRootError : ''} ${success && !error ? classes.labelRootSuccess : ''}`;

  let formControlClasses = `${classes.formControl} ${formControlProps !== undefined ? formControlProps.className : ''}`;
  const underlineClasses = cx({
    [classes.underline]: true,
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
  });
  if (inputProps !== undefined) {
    formControlClasses =
      formControlClasses +
      " " +
      cx({
        [classes.inputWithAdornment]: (inputProps.startAdornment !== undefined ||
            inputProps.endAdornment !== undefined) &&
          labelText === undefined,
      });
  }
  if (inputProps !== undefined) {
    labelClasses = `${labelClasses} ${inputProps.endAdornment !== undefined ? classes.labelWithAdornment : ''}`;
  }
  const successClasses = `${classes.feedback} ${classes.labelRootSuccess} ${labelText === undefined ? classes.feedbackNoLabel : ''} ${inputProps !== undefined && inputProps.endAdornment !== undefined ? classes.feedbackAdorment : ''}`;

  const errorClasses =
    classes.feedback +
    " " +
    classes.labelRootError +
    " " +
    cx({
      [classes.feedbackNoLabel]: labelText === undefined,
      [classes.feedbackAdorment]:
        inputProps !== undefined && inputProps.endAdornment !== undefined,
    });
  const input = `${classes.input} ${rtlActive ? classes.inputRTL : ''} ${labelText === undefined ? classes.inputNoLabel : ''}`;
  return (
    <FormControl
      {...formControlProps}
      className={formControlClasses}
      aria-describedby={`${id}-text`}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={errorClasses} />
      ) : success ? (
        <Check className={successClasses} />
      ) : null}
      {helpText !== undefined ? (
        <FormHelperText id={`${id}-text`}>{helpText}</FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default withStyles(customInputStyle)(CustomInput);
