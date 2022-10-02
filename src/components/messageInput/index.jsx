import React from "react";
import { SendMessage } from "../../services/firebase";
import "./styles.css";
import { useDispatch } from "react-redux";
import { addUserMessages } from "../../redux/slices/userSlice";
import { userContext } from "../../App";

function MessageInput({ roomId }) {
  const { user } = React.useContext(userContext);

  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUserMessages({ userName: user, message: value }));
    SendMessage(roomId, user, value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-container">
      <input
        type="text"
        placeholder="Enter a message"
        value={value}
        onChange={handleChange}
        className="message-input"
        required
        minLength={1}
      />
      <button type="submit" disabled={value < 1} className="send-message">
        Send
      </button>
    </form>
  );
}

export { MessageInput };
