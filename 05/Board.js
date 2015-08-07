import React, {Component} from 'react';
import {Row, Col} from './design';
import {Card} from './Card';

export class Board extends Component {
  render() {
    console.log
    return (
      <Col>
        {this.props.game.map((row) =>
          <Row>
            {row.map((item) =>
              <Card turned={this.props.turned.has(item.id)}
                    done={this.props.done.has(item.id)}
                    item={item}
                    onClick={() => this.props.turnCard(item)}/>
            )}
          </Row>
        )}
      </Col>
    );
  }
}
