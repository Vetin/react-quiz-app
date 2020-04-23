import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './QuizList.module.css';
import Loader from '../../compoents/UI/Loader';
import { connect } from 'react-redux';
import { fetchQuizes } from '../../redux/actions/quiz';
class QuizList extends Component {
  componentDidMount() {
    this.props.fetchQuizes();
  }

  renderQuiz() {
    return this.props.quizes.map((quiz, index) => (
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
          {this.props.loading ? <Loader /> : <ul>{this.renderQuiz()}</ul>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  quizes: state.quiz.quizes,
  loading: state.quiz.loading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchQuizes: () => dispatch(fetchQuizes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
