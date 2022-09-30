import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";

function UnauthenticatedApp() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const login = () => {
    const user = userName;
    dispatch(addUser(user));
  };

  return (
    <>
      <h2>Enter UserName to join a Chat Room!</h2>
      <div>
        <input
          type="text"
          placeholder="Enter UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={login} className="login">
          Join
        </button>
      </div>
    </>
  );
}

export { UnauthenticatedApp };
