import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {acTurnCard} from "./model";

const mapState = () => ({});
const mapDispatch = (d) => bindActionCreators({
  onClick: acTurnCard
}, d);
export const Card = connect(mapState, mapDispatch)(
  ({cardId, turned, done, onClick}) => {
    const picture = Math.trunc(cardId/2);
    let text= `Turn me ${picture}`;
    let color= "yellow";
    if (turned) {
      text = picture;
      color= "lime";
    } else if (done) {
      text = `Done: ${picture}`;
      color= "pink";
    }
    return (
      <div style={{
          width: "50px",
          height: "50px",
          margin: "10px",
          backgroundColor: color,
        }}
        onClick={() => onClick(cardId)}
      >
      {text}
      </div>
    );
})