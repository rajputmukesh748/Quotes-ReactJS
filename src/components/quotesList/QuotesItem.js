import React from "react";

function QuotesItem(props) {
  return (
    <div style={{ margin: 20, border: 1, borderColor: "black" }}>
      <h3>
        {props.quote.id}.{props.quote.quote}
      </h3>
      <p style={{ textAlign: "end" }}>Author: {props.quote.author}</p>
    </div>
  );
}

export default QuotesItem;
