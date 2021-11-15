import './style/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/ComponentStyle.css';
import Login from "./components/login/Login";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from "./components/landing_page/LandingPage";
import AboutUs from "./components/about_us/AboutUs";
import TermsAndConditions from "./components/terms_and_conditions/TermsAndConditions";
import PrivacyAndPolicy from "./components/privacy_and_policy/PrivacyAndPolicy";
import Register from "./components/register/Register";
import SingleProduct from "./components/single_product/SingleProduct";

function App() {
  return (
      <Router>
        <div className="landingPage">
            <Header/>
              <Switch>
                  <Route path="/" exact component={LandingPage}/>
                  <Route path="/about-us" component={AboutUs}/>
                  <Route path="/terms-and-conditions" component={TermsAndConditions}/>
                  <Route path="/privacy-and-policy" component={PrivacyAndPolicy}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/product" component={SingleProduct}/>
              </Switch>
            <Footer/>
        </div>
      </Router>
  );
}

export default App;
