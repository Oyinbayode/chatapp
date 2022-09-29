import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Chat from "./Chat";

function App() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinChat = () => {
    if (userName !== "" && room !== "") {
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinOuterContainer">
          <h3>Join Chat</h3>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Room"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinChat}>Join</button>
        </div>
      ) : (
        <div className="chatOuterContainer">
          <Chat userName={userName} room={room} />
        </div>
      )}
    </div>
  );
}

export default App;
