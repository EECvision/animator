import { Route, Switch, Redirect } from 'react-router-dom';
import WorkPage from './pages/work-page/work.component';
import Playground from './pages/playground-page/playground.component';
import About from './pages/about-page/about.component';
import Navbar from './components/navbar/navbar.component';
// import Flash from './components/flash/flash.component';
// import { animated, useTransition, config } from 'react-spring';
import ProjectOne from './components/project-1/project1.component';
import ProjectFour from './components/project-4/project4.component';
import ProjectThree from './components/project-3/project3.component';
import ProjectTwo from './components/project-2/project2.component';
import './App.css';

function App() {
  if (!(window.sessionStorage.setLink === "false")) {
    window.sessionStorage.setItem("link",
      JSON.stringify({
        work: 100,
        about: 0,
        playground: 0,
      }));
  }

  if (window.sessionStorage.setProjectLink === "true") {
    window.sessionStorage.setProject = 0;
  }

  window.sessionStorage.setProjectLink = "false";
  window.sessionStorage.setLink = "false";

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
              <Route exact path='/work/project1' component={ProjectOne} />
              <Route exact path='/work/project2' component={ProjectTwo} />
              <Route exact path='/work/project3' component={ProjectThree} />
              <Route exact path='/work/project4' component={ProjectFour} />
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