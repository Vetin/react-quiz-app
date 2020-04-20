import React from 'react';
import classes from './Answer.module.css';

export default (props) => (
  <li
    onClick={props.changeAnswer}
    className={
      props.answer === props.currentAnswer ? classes.currentAnswer : null
    }
  >
    <p>
      <small>
        <b>{props.index})</b>
      </small>
      <span>{props.answer}</span>
    </p>
  </li>
);
