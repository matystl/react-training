import React, {Component} from 'react';
import {Row, Col} from './design';
import {Card} from './Card';

export class Board extends Component {
  render() {
    return (
      <Col>
        {this.props.game.map((row, i) =>
          <Row key={i}>
            {row.map((item, i) =>
              <Card
                key={i}
                turned={this.props.turned.indexOf(item.id) !== -1}
                done={this.props.done.indexOf(item.id) !== -1}
                item={item}
                onClick={() => this.props.turnCard(item)} />
            )}
          </Row>
        )}
      </Col>
    );
  }
}
