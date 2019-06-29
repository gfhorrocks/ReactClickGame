import React, { Component } from 'react';
import Banner from './components/Banner';
import Cards from './cards.json';
import Card from './components/Cards';
import Wrapper from './components/Wrapper';

class App extends Component {
  state = {
    cards: Cards,
    score: 0,
    highScore: 0,
    message: "Click a character to begin."
  };

  correctMessage = () => {
    switch (this.state.score) {
      case 0:
        this.setState({ message: "You guessed correctly!" })
        break;
      case 1:
        this.setState({ message: "2 in a row!" })
        break;
      case 2:
        this.setState({ message: "3 in a row!" })
        break;
      case 3:
        this.setState({ message: "4 in a row!" })
        break;
      case 4:
        this.setState({ message: "5 in a row!" })
        break;
      case 5:
        this.setState({ message: "6 in a row!" })
        break;
      case 6:
        this.setState({ message: "7 in a row!" })
        break;
      case 7:
        this.setState({ message: "8 in a row!" })
        break;
      case 8:
        this.setState({ message: "9 in a row!" })
        break;
      case 9:
        this.setState({ message: "10 in a row!" })
        break;
      case 10:
        this.setState({ message: "11 in a row!" })
        break;
      case 11:
        this.setState({ message: "You got them all right! Click any Image to start over!" })
        break;
      default:
        console.log(this.state.message)
        break;
    }
  };

  shuffle = (array) => { array.sort(() => Math.random() - 0.5) };

  score = () => {
    this.setState({ score: this.state.score + 1 })

    if (this.state.count > this.state.highScore) {
      this.setState({ highScore: this.state.count })
    }
  };

  hasBeenClicked = id => {
    if (this.state.cards[id - 1].clicked === true) {
      var array = Object.assign({}, this.state);

      for (var i = 0; i < this.state.cards.length; i++) {
        array.cards[i].clicked = false;
      }
      this.setState(array);
      this.setState({ score: 0 });
      this.setState({ message: "Whoops! Wrong! Click an image to start over!" })
    } else {
      var stateCopy = Object.assign({}, this.state);
      stateCopy.cards[id - 1].clicked = true;
      this.setState(stateCopy);
      this.score();
      let arr = this.state.cards;
      this.shuffle(arr);
      this.correctMessage();
    }
  }

  render() {
    return (
      <div>
        <div className='left'>
          <Banner>
            <h1>React Click Game</h1>
            <h3>{this.state.message}</h3>
            <h3>Score: {this.state.score}</h3>
            <h3>HighScore: {this.state.highScore}</h3>
          </Banner>
        </div>
        <div className='right'>
          <Wrapper>
            {this.state.cards.map((card, index) => (
              <Card
                hasBeenClicked={this.hasBeenClicked}
                id={index + 1}
                image={card.image}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    )
  }
}

export default App;
