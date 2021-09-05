import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./components/Home";
import Profile from "./components/Profile";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navber from "./components/Navber";

function App() {

  const Routing = () => {
    
    return (
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        {/* <Route path="/newpost">
          <CreatePost />
        </Route> */}
      </Switch>
    );
  };

  return <>
    <BrowserRouter>
      <Navber />
      <Routing />
    </BrowserRouter>
  </>;
}

export default App;
