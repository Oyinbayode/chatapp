import { Link, useParams } from "react-router-dom";
import "./styles.css";

const chatRoom = [
  {
    id: "general",
    title: "General Chat",
  },
];

function ChatRoom() {
  const params = useParams();

  const room = chatRoom.find((x) => x.id === params.id);
  return (
    <>
      <h2>{room.title}</h2>
      <div>
        <Link to="/">⬅️ Back to all rooms</Link>
      </div>
      <div className="messages-container">{/* TODO */}</div>
    </>
  );
}

export { ChatRoom };
