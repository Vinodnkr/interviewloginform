// App.js (for React Router v5)
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import PasswordReset from "./components/PasswordReset";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/registration" component={RegistrationForm} />
          <Route path="/" exact component={LoginForm} />
          <Route path="/password" component={PasswordReset} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
