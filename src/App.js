import "./App.css";
import { useEffect, useState, createContext } from "react";

import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  // Get users from firebase
  useEffect(() => {});

  return (
    <div className="container">
      <h1>Chat Room</h1>
      <userContext.Provider value={{ user, setUser }}>
        {user === null ? <UnauthenticatedApp /> : <AuthenticatedApp />}
        {/* <UnauthenticatedApp /> */}
      </userContext.Provider>
    </div>
  );
}

export default App;
