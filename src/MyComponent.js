import React from "react";

function MyComponent(props) {
  return (
    <div className="welcome">
      <h1>MY COMPONENT</h1>
      <h2>Welcome {props.city} </h2>
    </div>
  );
}

export default MyComponent;

// `function` components use `props`  to access the props data. `props` has to be specified as the function parameter before we can use it.
