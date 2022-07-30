import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Crew from "./pages/crew";
import Destination from "./pages/destination";
import Home from "./pages/home";
import Technology from "./pages/technology";
import Navbar from './components/Navbar';
import db from "./firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion';

import moon from '../src/assets/destination/image-moon.png';
import shuttleworth from '../src/assets/crew/image-mark-shuttleworth.png';
import launch from '../src/assets/technology/image-launch-vehicle-portrait.jpg';


function App() {

  const [crews, setCrews] = useState([]);
  const [crewName, setCrewName] = useState(['shuttleworth']);
  const [crewImage, setCrewImage] = useState([shuttleworth]);

  const [planets, setPlanet] = useState([]);
  const [pans, setPans] = useState(['MOON']);
  const [planetImage, setPlanetImage] = useState([moon]);

  const [techs, setTechs] = useState([]);
  const [techName, setTechName] = useState(['1']);
  const [techImage, setTechImage] = useState([launch]);

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


  function onPlanet(pname, planet){
    setPans(pname);
    setPlanetImage(planet);
  }

  function onCrew(cname, crewmember){
    setCrewName(cname);
    setCrewImage(crewmember);
  }

  function onTech(tname, tech){
    setTechName(tname);
    setTechImage(tech)
  }

  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route exact path='/' element={<Home />} />
          <Route path='technology' element={<Technology props={techs} onTech={onTech} image={techImage}/>} />
          <Route path='crew' element={<Crew props={crews} onCrew={onCrew} image={crewImage} />} />
          <Route path='destination' element={<Destination props={planets} Name={pans} onPlanet={onPlanet} image={planetImage}/>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
