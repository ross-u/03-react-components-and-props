import React from "react";
import "./App.css"; // with React CSS files are imported directly into the .js file

const user = {
  avatar: "https://i.imgur.com/h1iCSwY.png"
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
      </div>
    );
  }
}

export default App;
