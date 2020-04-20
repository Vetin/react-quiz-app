import React, { Component } from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';
export default class QuizList extends Component {
  renderQuiz() {
    return [1, 2, 3, 4].map((quiz, index) => (
      <li key={index}>
        <NavLink to={`/quiz/${quiz}`}>Quiz {quiz}</NavLink>
      </li>
    ));
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List page</h1>
          <ul>{this.renderQuiz()}</ul>
        </div>
      </div>
    );
  }
}
