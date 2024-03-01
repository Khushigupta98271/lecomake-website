import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import WebsiteDesign from './components/WebsiteDesign';
import AndroidDevelopment from './components/AndroidDevelopment';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
        <Navbar/>
        
        
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path="Components/Services" element={<Services/>} />
        <Route exact path="/WebsiteDesign" element={<WebsiteDesign/>} />
        <Route exact path="/AndroidDevelopment" element={<AndroidDevelopment/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
