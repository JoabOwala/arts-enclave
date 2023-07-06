import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";
import ArtForm from "./ArtForm";
import ArtList from "./ArtList";
import HomePage from "./HomePage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  return (
     <>
     <Header/>
      <NavigationBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <HomePage user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
