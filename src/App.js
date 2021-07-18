import "./index.css";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {

  const isLogin = useSelector(state => state.login.isLogin);

  return (
    <div className="app">
      {isLogin ? <Redirect to="/logout" /> : <Redirect to="/" />}
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/logout" render={() => <Logout />} />
      </Switch>
    </div>
  );
}

export default App;
