import { Page, Parent, Child, StaticText, StaticNumber, ImageContainer, PlanetDesc, PlanetName, PlanetNav, PlanetInfoBox, PlanetData, InfoHead, InfoStat, Uncle, Button } from "../components/styles/Destination.styled";
import { motion } from "framer-motion";
const Destination = ({ props, Name, onPlanet, loading }) => {


    return (
        <Page>
            
            <Parent>
                <StaticText><StaticNumber>01</StaticNumber>CHOOSE YOUR DESTINATION</StaticText>
                <Child>
                    <ImageContainer 
                        as={motion.img}
                        key={props.image}
                        src={props.image}
                        initial={{ rotate: 15, x: 0, scale: 1.5, opacity: 0 }}
                        animate={{ rotate: 0, x: 0, scale: .75, opacity: 1 }}
                        exit={{ x: 500, scale: 0.5, opacity: 0 }}
                        transition={{ duration: 2 }}
                    />
                    <Uncle 
                        as={motion.div}
                        key={Name}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ x: -200, scale: 0.5, opacity: 0 }}
                        transition={{ duration: 2 }}>
                        <PlanetNav>
                            <Button onClick={() => onPlanet('MOON')}>MOON</Button>
                            <Button onClick={() => onPlanet('MARS')}>MARS</Button>
                            <Button onClick={() => onPlanet('EUROPA')}>EUROPA</Button>
                            <Button onClick={() => onPlanet('TITAN')}>TITAN</Button>
                        </PlanetNav>
                        <PlanetName>{Name}</PlanetName>
                        <PlanetDesc>{props.body}</PlanetDesc>
                        <PlanetInfoBox>
                            <PlanetData>
                                <InfoHead>AVG. DISTANCE</InfoHead>
                                <InfoStat>{props.distance}</InfoStat>
                            </PlanetData>
                            <PlanetData>
                                <InfoHead>EST. TRAVEL TIME</InfoHead>
                                <InfoStat>{props.time}</InfoStat>
                            </PlanetData>
                        </PlanetInfoBox>
                    </Uncle>
                </Child>
            </Parent>
        </Page>
    )
}


export default Destination;