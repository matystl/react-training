import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {Row} from "./Row";
import {Card} from "./Card";
import {acStartNewGame} from "./model";

const mapState = (state) => state;
const mapDispatch = (dispatch) => bindActionCreators({
  acStartNewGame
}, dispatch)
export const Game = connect(mapState, mapDispatch)(
  ({board, done, turned, acStartNewGame}) =>
  <div>
    Game
    <button onClick={acStartNewGame}>Start new game</button>
    {board &&
    board.map((row, i) =>
      <Row key={i}>
        {row.map((card, i) =>
          <Card key={i}
            cardId={card}
            turned={turned.indexOf(card) != -1}
            done={done.indexOf(card) != -1} />
        )}
      </Row>
    )}
  </div>
);