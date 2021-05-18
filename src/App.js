import './App.css';
import Home from './pages/Home';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
      <Route exact path ="/" component={Home}></Route>
      <Route exact path ="/rooms/" component={Room}></Route>
      <Route exact path ="/rooms/:slug" component={SingleRoom}></Route>
      <Route component={Error}></Route>
    </Switch>
    </div>
  );
}

export default App;
