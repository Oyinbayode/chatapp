import React from "react";
import "./styles.css";

import { onSnapshot, collection, query } from "firebase/firestore";
import { db } from "../../services/firebase";
import { userContext } from "../../App";

function MessageList({ roomId }) {
  const containerRef = React.useRef(null);
  const { user } = React.useContext(userContext);

  const [messagesArray, setMessagesArray] = React.useState([]);

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "chat-rooms", roomId, "messages")),
      (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            setMessagesArray((prev) => [...prev, change.doc.data()]);
          }
        });
      }
    );
    return unsubscribe;
  }, [roomId]);

  return (
    <div className="message-list-container" ref={containerRef}>
      <ul className="message-list">
        {messagesArray.map((x) => (
          <Message
            key={x.id}
            message={x}
            isOwnMessage={x.displayName === user}
            time={x.createdAt}
          />
        ))}
      </ul>
    </div>
  );
}

function Message({ message, isOwnMessage }) {
  const { displayName, text } = message;
  return (
    <li className={["message", isOwnMessage && "own-message"].join(" ")}>
      <h4 className="sender">{isOwnMessage ? "You" : displayName}</h4>

      <div>{text}</div>
    </li>
  );
}

export { MessageList };
