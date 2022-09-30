import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import { useSelector, useDispatch } from "react-redux";
import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import { emptyUser } from "./redux/slices/userSlice";

function App() {
  const user = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(emptyUser());
  // });

  return (
    <div className="container">
      <h1>Chat Room</h1>
      {user !== null ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
