import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login';
import Header from './components/Header';
import Modal2 from './components/MyModal2';
import { PageContainer } from './styles/Div';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Modal2 />
      <Route
        render={({ location }) => {
          return (
            <PageContainer>
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/" component={LandingPage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </PageContainer>
          );
        }}
      />
      
    </Router>
  );
}

export default App;
