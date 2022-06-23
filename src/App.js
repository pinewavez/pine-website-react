
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path='/gallery' element={<Gallery/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
