import React from 'react';
import classes from './ActiveQuiz.module.css';
import Answer from '../Answer/Answer';

class ActiveQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnswer: '',
    };
  }

  changeAnswer(currentAnswer) {
    this.setState({ currentAnswer });
  }

  render() {
    const error = <p className={classes.error}>You should choose ansert</p>;
    const answers = this.props.quiz.answers.map((answer, index) => (
      <Answer
        changeAnswer={() => this.changeAnswer(this.props.quiz.answers[index])}
        currentAnswer={this.state.currentAnswer}
        answer={this.props.quiz.answers[index]}
        index={index + 1}
        key={index}
      />
    ));
    return (
      <div className={classes.ActiveQuiz}>
        <p className={classes.count}>
          {this.props.currentQuestion}/{this.props.quizLen}
        </p>
        <h3>{this.props.quiz.question}</h3>
        {this.props.isError ? error : null}
        <ul>{answers}</ul>
        <div className={classes.btnRow}>
          <button
            onClick={() => this.props.btnHandler(this.state.currentAnswer)}
            className={classes.Button}
          >
            Ответить
          </button>
        </div>
      </div>
    );
  }
}

export default ActiveQuiz;
