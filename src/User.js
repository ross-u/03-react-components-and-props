// rfce + Tab

import React from "react";

function User(props) {
  return (
    <div className="user">
      <img src={props.image} alt="" />
      <h2>Hello {props.firstName}!</h2>

      {/* <Profile firstName={props.firstName} /> */}
    </div>
  );
}

export default User;
