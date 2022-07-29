import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Crew from "./pages/crew";
import Destination from "./pages/destination";
import Home from "./pages/home";
import Technology from "./pages/technology";
import Navbar from './components/Navbar';
import db from "./firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";


function App() {

  const [crews, setCrews] = useState([]);
  const [crewName, setCrewName] = useState(['shuttleworth']);

  const [planets, setPlanet] = useState([]);
  const [pans, setPans] = useState(['MOON']);

  const [techs, setTechs] = useState([]);
  const [techName, setTechName] = useState(['1']);

  async function crewData() {
    const crewRef = doc(db, 'crew', `${crewName}`);
    const crewSnap = await getDoc(crewRef);
    setCrews(crewSnap.data());
  }

  async function planetData() {
    const planetRef = doc(db, 'planets', `${pans}`);
    const planetSnap = await getDoc(planetRef);
    setPlanet(planetSnap.data());
  }

  async function techData() {
    const techRef = doc(db, 'technology', `${techName}`);
    const techSnap = await getDoc(techRef);
    setTechs(techSnap.data());
  }


  useEffect( () => {
    crewData();
  }, [crewName]);

  useEffect( () => {
    planetData();
  }, [pans]);

  useEffect( () => {
    techData();
  }, [techName]);


  function onPlanet(pname){
    setPans(pname);
  }

  function onCrew(cname){
    setCrewName(cname);
  }

  function onTech(tname){
    setTechName(tname);
  }

  return (
    <>
    
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='technology' element={<Technology props={techs} onTech={onTech}/>} />
        <Route path='crew' element={<Crew props={crews} onCrew={onCrew} />} />
        <Route path='destination' element={<Destination props={planets} Name={pans} onPlanet={onPlanet} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
