import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, emptyUser } from "./redux/slices/userSlice";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ userName, room }) => {
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [updatedState, setUpdatedState] = React.useState([]);

  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (currentMessage !== "") {
      const userData = {
        id: Math.floor(Math.random() * 100000000),
        user: userName,
        message: currentMessage,
        room: room,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      dispatch(addUser(userData));
      setCurrentMessage("");
    }
  };

  // var updates = useCallback(() => {

  // }, []);

  useEffect(() => {
    if (localStorage.getItem("persist:root") !== null) {
      const retrievedStoreStr = localStorage.getItem("persist:root"); // this is a string
      const retrievedStore = JSON.parse(retrievedStoreStr);
      const retrievedStoreObj = JSON.parse(retrievedStore.user);
      window.addEventListener("beforeunload", () => {
        if (state.userData < retrievedStoreObj.userData) {
          setUpdatedState(() => retrievedStoreObj.userData);
        }
      });

      // Convert to Object

      // console.log(retrievedStore.user);
      console.log(retrievedStoreObj);
      // dispatch(emptyUser());

      // dispatch(emptyUser());
      // setUpdatedState([]);
    }
  }, [updatedState, state.userData]);

  // console.log("updatedState", updatedState);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {updatedState.map((messageContent, i) => {
            return (
              <div
                className="message"
                id={userName === messageContent.user ? "you" : "other"}
                key={i}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">
                      {userName === messageContent.user
                        ? "you"
                        : messageContent.user}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chat;
