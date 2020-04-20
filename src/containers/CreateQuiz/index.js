import React, { Component } from 'react';
import classes from './CreateQuiz.module.css';
import Input from '../../compoents/UI/Input';

export default class CreteQuiz extends Component {
  state = {
    quiz: [
      {
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: '',
      },
    ],
    currentQuestionIdx: 0,
  };

  renderInputs = () => {
    const idx = this.state.currentQuestionIdx;
    return this.state.quiz[idx].answers.map((answer, index) => (
      <Input
        required
        type="text"
        placeholder={`Answer ${index + 1}`}
        name="answers"
        key={index}
        value={answer}
        onChange={(e) => this.onChange(e, index)}
      />
    ));
  };

  renderOptions = () => {
    return this.state.quiz.map((question, idx) => {
      return (
        <option value={idx} key={idx}>
          Question {idx}
        </option>
      );
    });
  };

  onChange(e, idx) {
    const quiz = [...this.state.quiz];
    const name = e.target.name;
    const curIdx = this.state.currentQuestionIdx;
    if (name === 'answers') {
      console.log(e.target);
      quiz[curIdx].answers[idx] = e.target.value;
    } else {
      quiz[curIdx][e.target.name] = e.target.value;
    }
    this.setState({ quiz });
  }

  addQuestionHandler = () => {
    const quiz = [...this.state.quiz];
    quiz.push({
      question: '',
      answers: ['', '', '', ''],
      correctAnswer: '',
    });
    this.setState({ quiz });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log('test');
  };
  render() {
    return (
      <div className={classes.Create}>
        <div>
          <h1>Create quiz!</h1>

          <form onSubmit={this.submitHandler}>
            <h3>Question</h3>
            <Input
              required="required"
              placeholder="Question"
              name="question"
              value={this.state.quiz[this.state.currentQuestionIdx].question}
              onChange={(e) => this.onChange(e)}
            />
            <h3>Answers</h3>
            {this.renderInputs()}
            <h3>Correct answer</h3>
            <Input
              required
              placeholder="Correct answer"
              name="correctAnswer"
              value={
                this.state.quiz[this.state.currentQuestionIdx].correctAnswer
              }
              onChange={(e) => this.onChange(e)}
            />
            <div className={classes.selectGroup}>
              <h3>Choose question</h3>
              <select
                required
                onChange={(e) =>
                  this.setState({ currentQuestionIdx: e.target.value })
                }
              >
                {this.renderOptions()}
              </select>
            </div>
            <div className={classes.btnRow}>
              <button onClick={() => this.addQuestionHandler()}>
                Add question
              </button>
              <button type="submit">Create quiz</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
