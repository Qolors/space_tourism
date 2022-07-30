import { Page, Parent, Child, StaticText, StaticNumber, ImageContainer, PlanetDesc, PlanetName, PlanetNav, PlanetInfoBox, PlanetData, InfoHead, InfoStat, Uncle, Button } from "../components/styles/Destination.styled";
import { motion } from "framer-motion";
import moon from '../../src/assets/destination/image-moon.png';
import mars from '../../src/assets/destination/image-mars.png';
import europa from '../../src/assets/destination/image-europa.png';
import titan from '../../src/assets/destination/image-titan.png';
import Animated from "../components/Animated";

const Destination = ({ props, Name, onPlanet, image }) => {


    return (
        <Animated>
        <Page>
            <Parent>
                <StaticText><StaticNumber>01</StaticNumber>CHOOSE YOUR DESTINATION</StaticText>
                <Child>
                    <ImageContainer 
                        as={motion.img}
                        key={image}
                        src={image}
                        initial={{ rotate: 15, x: 0, scale: 1.5, opacity: 0 }}
                        animate={{ rotate: 0, x: 0, scale: 1, opacity: 1 }}
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
                            <Button onClick={() => onPlanet('MOON', moon)}>MOON</Button>
                            <Button onClick={() => onPlanet('MARS', mars)}>MARS</Button>
                            <Button onClick={() => onPlanet('EUROPA', europa)}>EUROPA</Button>
                            <Button onClick={() => onPlanet('TITAN', titan)}>TITAN</Button>
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
        </Animated>
    )
}


export default Destination;