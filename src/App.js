
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path='/gallery' element={<Gallery/>} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
