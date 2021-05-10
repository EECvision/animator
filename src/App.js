import { Route, Switch, Redirect } from 'react-router-dom';
import WorkPage from './pages/work-page/work.component';
import Playground from './pages/playground-page/playground.component';
import About from './pages/about-page/about.component';
import Navbar from './components/navbar/navbar/navbar.component';
// import Flash from './components/flash/flash.component';
// import { animated, useTransition, config } from 'react-spring';
import './App.css';

function App() {
  if (!(window.sessionStorage.setlink === "false")) {
    window.sessionStorage.setItem("link",
      JSON.stringify({
        work: 100,
        about: 0,
        playground: 0,
      }))
  }
  window.sessionStorage.setlink = "false";

  // const location = useLocation();
  // const transitions = useTransition(location, ({
    // from: { transform: "translateY(0rem)" },
    // enter: { transform: "translateY(-2rem)" },
    // leave: { transform: "translateY(0rem)" },
    // delay: 100,
    // trails: 100,
    // config: config.slow
  // }))

  return (
    <div className="App">
      <Navbar />
      {/* <Flash /> */}
      {/* {
        transitions((props, item) => (
          <animated.div style={props}> */}
            <Switch >
              <Route exact path='/' render={() => <Redirect to='/work' />} />
              <Route exact path='/work' component={WorkPage} />
              <Route exact path='/about' component={About} />
              <Route exact path='/playground' component={Playground} />
            </Switch>
          {/* </animated.div>
        ))
      } */}
    </div>
  )
}

export default App;