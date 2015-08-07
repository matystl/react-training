import React, {Component} from 'react';
import {createNewGame, isCardsSame, range} from './model'
import {Board} from './Board'


export class App extends Component {

  state = {
    game : null,
    done: new Set(),
    turned: new Set(),
  };

  startNewGame() {
    const picutres = range(0, 8);
    this.setState({
      done: new Set(),
      turned: new Set(),
      game: createNewGame(picutres),
    });
  }

  turnCard(item) {
    console.log("turn item", item.id);
    console.log(this.state);
    let {turned, done} = this.state;
    if (turned.has(item.id)) return;
    if (turned.size == 2) {
      if (isCardsSame(turned)) {
        turned.forEach((i) => done.add(i));
      }
      turned.clear();
    }
    turned.add(item.id);
    this.setState({turned, done});
  }


  render() {
    return (
      <div>
        <h1>Pexeso game </h1>
        <button onClick={::this.startNewGame}>New game</button>
        Correct turned: {this.state.done.size / 2}
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
