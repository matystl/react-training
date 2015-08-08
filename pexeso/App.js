import React, {Component} from 'react';
import { connect } from 'react-redux';

import {createNewGame} from './model';
import {startNewGame, turnCard} from './actions';
import {Game} from './Game';


@connect(
  state => ({...(state)})
)
export class App extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.props.dispatch(startNewGame())}>
          start new game
          </button>
        </div>
        {this.props.game
          ?<Game board={this.props.game}
                 {...(this.props)}
                 onTurnCard={ (id) => this.props.dispatch(turnCard(id))}
            />
          :"Please start game with new game button"}
      </div>
    );
  }
}
