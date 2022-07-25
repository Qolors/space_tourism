import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Crew from "./pages/crew";
import Destination from "./pages/destination";
import Home from "./pages/home";
import Technology from "./pages/technology";
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='technology' element={<Technology />} />
        <Route path='crew' element={<Crew />} />
        <Route path='destination' element={<Destination />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
