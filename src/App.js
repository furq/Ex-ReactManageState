import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Score from "./Score";
import Game from "./Game";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends React.Component {
  state = {
    correctAnswer: 0,
    numQuestions: 0
  };

  handleAnswer = answerWasCorrect => {
    if (answerWasCorrect) {
      this.setState(currentState => ({
        correctAnswer: currentState.correctAnswer + 1
      }));
    }
    this.setState(currentState => ({
      numQuestions: currentState.numQuestions + 1
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game handleAnswer={this.handleAnswer} />
        <Score
          numCorrect={this.state.correctAnswer}
          numQuestions={this.state.numQuestions}
        />
      </div>
    );
  }
}

export default App;
