import { Page, Parent, Child, StaticText, StaticNumber, ImageContainer, PlanetDesc, PlanetName, PlanetNav, PlanetInfoBox, PlanetData, InfoHead, InfoStat, Uncle, Button } from "../components/styles/Destination.styled";
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';
import db from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

const Destination = () => {

    const [img, setImg] = useState(moon)

    const [Name, setName] = useState('MOON');

    const [planet, setPlanet] = useState([]);

    async function fetchData() {
        const docRef = doc(db, 'planets', `${Name}`);
        const docSnap = await getDoc(docRef);
        setPlanet(docSnap.data());
    }

    useEffect( () => {
        fetchData();
    }, [Name]);

    function onClick(negs, plans) {
        setName(`${negs}`);
        setImg(plans);
    };
    

    return (
        <Page>
            <Parent>
                <StaticText><StaticNumber>01</StaticNumber>CHOOSE YOUR DESTINATION</StaticText>
                <Child>
                    <ImageContainer src={img} />
                    <Uncle>
                        <PlanetNav>
                            <Button onClick={() => onClick('MOON', moon)}>MOON</Button>
                            <Button onClick={() => onClick('MARS', mars)}>MARS</Button>
                            <Button onClick={() => onClick('EUROPA', europa)}>EUROPA</Button>
                            <Button onClick={() => onClick('TITAN', titan)}>TITAN</Button>
                        </PlanetNav>
                        <PlanetName>{Name}</PlanetName>
                        <PlanetDesc>{planet.body}</PlanetDesc>
                        <PlanetInfoBox>
                            <PlanetData>
                                <InfoHead>AVG. DISTANCE</InfoHead>
                                <InfoStat>{planet.distance}</InfoStat>
                            </PlanetData>
                            <PlanetData>
                                <InfoHead>EST. TRAVEL TIME</InfoHead>
                                <InfoStat>{planet.time}</InfoStat>
                            </PlanetData>
                        </PlanetInfoBox>
                    </Uncle>
                </Child>
            </Parent>

        </Page>
    )
}


export default Destination;