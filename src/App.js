
import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import SociailApp from './Component/Sociail/SociailApp';
import 'antd/dist/antd.css'
import SocailHeaders from "./Component/Sociail/SocailHeaders"
import Socailfriends from "./Component/Sociail/Socailfriends"


function App() {
  return (
    <div >

      <Router>
        <SocailHeaders />
        <Switch>
          <Route path="/" exact component={SociailApp} />
          <Route path="/firends" component={Socailfriends} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
