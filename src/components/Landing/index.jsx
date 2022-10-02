import { Link } from "react-router-dom";
import "./styles.css";

const chatRoom = [
  {
    id: "general",
    title: " 📣 General Chat",
  },
];

function Landing() {
  return (
    <>
      <h2>Choose a Chat Room</h2>
      <ul className="chat-room-list">
        {chatRoom.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export { Landing };
