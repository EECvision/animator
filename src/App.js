import { Route, Switch, Redirect } from 'react-router-dom';
import WorkPage from './pages/work-page/work.component';
import Playground from './pages/playground-page/playground.component';
import Home from './pages/home-page/home.component';
import Navbar from './components/navbar/navbar/navbar.component';
import Flash from './components/flash/flash.component';
import './App.css';

function App() {
    if (!(window.sessionStorage.setlink === "false")) {
      window.sessionStorage.setItem("link",
        JSON.stringify({
          work: 100,
          home: 0,
          playground: 0,
        }))
    }
    window.sessionStorage.setlink = "false";

  return (
    <div className="App">
      <Navbar />
      <Flash />
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/work' />} />
        <Route exact path='/work' component={WorkPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/playground' component={Playground} />
      </Switch>
    </div>
  )
}

export default App;