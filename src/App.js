import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Card from './cards.json';
import Cards from './components/Cards';
import Wrapper from './components/Wrapper';
import friendCard from './components/friendCard';


class App extends Component {
  state = {
    cards: Card,
    score: 0,
    highScore: 0,
    playGame: "Click a character to begin."
  }

  render() {
    return (
      <div>
        <Banner>
          <h1>React Click Game</h1>
          <h3>Click on a character to begin..</h3>
          <h3>Score: {this.state.score}</h3>
          <h3>HighScore: {this.state.highScore}</h3>
        </Banner>

        <Wrapper>
          {this.state.cards.map((card, index) => (
            <Cards
              hasBeenClicked={this.hasBeenClicked}
              id={index + 1}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}


        </Wrapper>


      </div>
    )
  }
}

export default App;
