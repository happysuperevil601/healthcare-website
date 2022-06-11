
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import initializeAuthentication from './Firebase/firebase.initialize';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Sevices/Services';
import Doctors from './Components/Doctors/Doctors';
import Notfound from './Components/Notfound/Notfound';
import Contactus from './Components/Contactus/Contactus';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer'
import Topsection from './Components/Topsection/Topsection';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import Viewdetail from './Components/ViewDetail/Viewdetail';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


initializeAuthentication();
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Topsection></Topsection>
          <Header></Header>
          <Switch >
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/detail/:detailsId'>
              <Viewdetail></Viewdetail>
            </PrivateRoute>
            <Route path='/doctor'>
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path='/gallery'>
              <Gallery> </Gallery>
            </PrivateRoute>
            <Route path='/contacts'>
              <Contactus></Contactus>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>

            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
