import React from 'react';
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

  const {
    labelRootError,
    labelRootSuccess,
    underline,
    underlineError,
    underlineSuccess,
    formControl,
    labelWithAdornment,
    feedbackNoLabel,
    feedback,
    input,
    inputRTL,
    inputNoLabel,
    inputWithAdornment,
    feedbackAdorment,
    disabled,
    labelRoot,
  } = classes;

  let labelClasses = `${error ? labelRootError : ''} ${success && !error ? labelRootSuccess : ''}`;

  let formControlClasses = `${formControl} ${formControlProps !== undefined ? formControlProps.className : ''}`;
  const underlineClasses = `${underline} ${error ? underlineError : ''} ${success && !error ? underlineSuccess : ''}`;
  if (inputProps !== undefined) {
    formControlClasses = `${formControlClasses} + ${(inputProps.startAdornment !== undefined || inputProps.endAdornment !== undefined) && labelText === undefined ? inputWithAdornment : ''}`;
  }
  if (inputProps !== undefined) {
    labelClasses = `${labelClasses} ${inputProps.endAdornment !== undefined ? labelWithAdornment : ''}`;
  }
  const successClasses = `${feedback} ${labelRootSuccess} ${labelText === undefined ? feedbackNoLabel : ''} ${inputProps !== undefined && inputProps.endAdornment !== undefined ? feedbackAdorment : ''}`;

  const errorClasses = `${feedback} ${labelRootError} ${labelText === undefined ? feedbackNoLabel : ''} ${inputProps !== undefined && inputProps.endAdornment !== undefined ? feedbackAdorment : ''}`;
  const inputClass = `${input} ${rtlActive ? inputRTL : ''} ${labelText === undefined ? inputNoLabel : ''}`;
  return (
    <FormControl
      {...formControlProps}
      className={formControlClasses}
      aria-describedby={`${id}-text`}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClass,
          disabled,
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
