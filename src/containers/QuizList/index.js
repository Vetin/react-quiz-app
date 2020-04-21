import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { axios } from '../../axios/axios.config';
import classes from './QuizList.module.css';
import Loader from '../../compoents/UI/Loader';
export default class QuizList extends Component {
  state = {
    quizes: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const resp = await axios.get('/quizes.json');
      const quizes = [];
      Object.keys(resp.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Quiz ${index + 1}`,
        });
      });
      this.setState({ quizes, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  renderQuiz() {
    return this.state.quizes.map((quiz, index) => (
      <li key={index}>
        <NavLink to={`/quiz/${quiz.id}`}>{quiz.name}</NavLink>
      </li>
    ));
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List page</h1>
          {this.state.loading ? <Loader /> : <ul>{this.renderQuiz()}</ul>}
        </div>
      </div>
    );
  }
}
