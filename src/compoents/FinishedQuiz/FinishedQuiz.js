import React from 'react';
import classes from './FinishedQuiz.module.css';
import { Link } from 'react-router-dom';

export default (props) => (
  <div className={classes.Finished}>
    <h3>Finished</h3>
    <p className={classes.text}>
      Your scored {props.points} points from {props.totalQues}
    </p>
    <div className={classes.btnRow}>
      <button className={classes.Button} onClick={props.btnHandler}>
        Play again
      </button>
      <Link to="/">
        <button className={classes.Button}>Choose another test</button>
      </Link>
    </div>
  </div>
);
