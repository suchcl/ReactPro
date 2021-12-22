import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import MyNavlink from "./components/MyNavlink/MyNavlink";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./App.css";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-2">
          <div className="list-group">
            <MyNavlink to="/about">About</MyNavlink>
            <MyNavlink to="/home">Home</MyNavlink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Redirect to="/about" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
