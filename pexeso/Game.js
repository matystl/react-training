import React, {Component} from 'react';
import {Card} from './Card';
import {Col, Row} from './design';

export class Game extends Component {
  render() {
    let {done, turned, board, onTurnCard} = this.props;
    return (
      <Col>
        {board.map((row) =>
          <Row>
            {row.map(item =>
              <Card done={done.indexOf(item.id) !== -1}
                    turned={turned.indexOf(item.id) !== -1}
                    {...item}
                    onClick={onTurnCard}
              />
            )}
          </Row>
        )}
      </Col>
    );
  }
}
