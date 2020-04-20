import React, { useState } from 'react';
import classes from './Input.module.css';

export default (props) => {
  const [isValid, changeValid] = useState(true);
  const inpType = props.type || 'text';
  const inpPlace = props.placeholder || '';
  const cls = [classes.Input];

  const checkValid = () => {
    if (props.emitError) {
      if (props.value.length === 0) {
        changeValid(false);
        props.emitError(props.name);
        return false;
      }
      props.validField(props.name);
      changeValid(true);
      return true;
    }
  };
  return (
    <div className={cls.join(' ')}>
      {isValid && !props.emitError ? null : (
        <span className={classes.Error}>
          {props.error}
          {props.error !== '' ? (
            <small onClick={() => props.errorHandler(props.name)}>
              &times;
            </small>
          ) : null}
        </span>
      )}
      <input
        required
        name={props.name}
        type={inpType}
        value={props.value}
        onChange={props.onChange}
        placeholder={inpPlace}
        onBlur={checkValid}
      />
    </div>
  );
};
