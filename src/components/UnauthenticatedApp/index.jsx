import { useState, useContext } from "react";
import { userContext } from "../../App";
import "./styles.css";

function UnauthenticatedApp() {
  const [userName, setUserName] = useState("");
  const { setUser } = useContext(userContext);

  const login = () => {
    if (userName === "") return;

    setUser(userName);
  };

  return (
    <>
      <h2>Enter a username to join a Chat Room!</h2>
      <div className="form">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Enter UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          disabled={userName === ""}
          onClick={() => login()}
          className="login"
        >
          Join
        </button>
      </div>
    </>
  );
}

export { UnauthenticatedApp };
