import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    const numberOfGames = this.generatedRandomNums();
    this.state = {
      value1: numberOfGames[0],
      value2: numberOfGames[1],
      value3: numberOfGames[2],
      proposedAnswer: numberOfGames[3]
    };
  }

  generatedRandomNums = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  };

  updateState = () => {
    const numberOfGames = this.generatedRandomNums();
    this.setState(prevState => ({
      value1: numberOfGames[0],
      value2: numberOfGames[1],
      value3: numberOfGames[2],
      proposedAnswer: numberOfGames[3]
    }));
  };

  handleAnswer = event => {
    const numberOfGames = this.generatedRandomNums();
    this.updateState(numberOfGames);
    const answerWasCorrect = this.verifyAnswer(event.target.name);
    this.props.handleAnswer(answerWasCorrect);
  };
  verifyAnswer(givenAnswer) {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const corrAnswer = value1 + value2 + value3;

    return (
      (corrAnswer === proposedAnswer && givenAnswer === "true") ||
      (corrAnswer !== proposedAnswer && givenAnswer === "false")
    );
  }

  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    console.log(`Game component rendered`);
    console.log(`${value1 + value2 + value3} === ${proposedAnswer}`);
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">
            {" "}
            {`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
          </p>
        </div>
        <button onClick={this.handleAnswer} name="true">
          True
        </button>
        <button onClick={this.handleAnswer} name="false">
          False
        </button>
      </div>
    );
  }
}

export default Game;
