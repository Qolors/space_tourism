import { Page, Parent, Child, StaticText, StaticNumber, ImageContainer, PlanetDesc, PlanetName, PlanetNav, PlanetInfoBox, PlanetData, InfoHead, InfoStat, Uncle, Button } from "../components/styles/Destination.styled";

const Destination = ({ props, Name, onPlanet }) => {


    return (
        <Page>
            <Parent>
                <StaticText><StaticNumber>01</StaticNumber>CHOOSE YOUR DESTINATION</StaticText>
                <Child>
                    <ImageContainer src={props.image} />
                    <Uncle>
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