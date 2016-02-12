import React, {Component} from 'react';
import {createNewGame, isCardsSame, range} from './model'
import {Board} from './Board'


export class App extends Component {

  state = {
    game : null,
    done: [],
    turned: [],
  };

  startNewGame() {
    const picutres = range(0, 8);
    this.setState({
      done: [],
      turned: [],
      game: createNewGame(picutres),
    });
  }

  turnCard(item) {
    let {turned, done} = this.state;
    if (turned.indexOf(item.id) !== -1) return;
    if (turned.length == 2) {
      if (isCardsSame(turned)) {
        done = [...done, ...turned];
      }
      turned = [];
    }
    turned.push(item.id);
    this.setState({turned, done});
  }


  render() {
    return (
      <div>
        <h1>Pexeso game </h1>
        <button onClick={::this.startNewGame}>New game</button>
        Correct turned: {this.state.done.length / 2}
        <div>
        {!this.state.game
          ?"No game started"
          :<Board {...this.state} turnCard={::this.turnCard} />
        }
        </div>
        {/*
        String representation:
        <pre>{JSON.stringify([...this.state.turned], null, 2)}</pre>
        <pre>{JSON.stringify([...this.state.done], null, 2)}</pre>
        */}
      </div>);
  }
}
