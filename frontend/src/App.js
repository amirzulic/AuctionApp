import './style/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/ComponentStyle.css';

function App() {
  return (
    <div className="landingPage">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
