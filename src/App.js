import React from "react";
import "./App.css"; // with React CSS files are imported directly into the .js file

import MyComponent from "./MyComponent";
import User from "./User";

import ReactPlayer from "react-player";

const user = {
  avatar: "https://i.imgur.com/h1iCSwY.png"
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* ADD THE IMPORTED COMPONENT */}

        {/* our Vimeo video */}
        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

        <ReactPlayer url="https://vimeo.com/channels/top/76979871" />

        {/* our YouTube video */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />

        <h1> Hello Ironhackers! </h1>

        <MyComponent city="Barcelona" />

        <User firstName="Uros" image={user.avatar} />

        <User firstName="Harper" />
        <User firstName="Ana" />
      </div>
    );
  }
}

export default App;
