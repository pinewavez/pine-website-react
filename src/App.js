
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path='/gallery' element={<Gallery/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
