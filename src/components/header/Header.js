import React from "react";

function Header(props) {
  return (
    <div>
      <center>
        <h2>{props.title}</h2>
      </center>
    </div>
  );
}

export default Header;
