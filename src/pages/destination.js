import { Page, Parent, Child, StaticText, StaticNumber, ImageContainer, PlanetDesc, PlanetName, PlanetNav, PlanetInfoBox, PlanetData, InfoHead, InfoStat, Uncle } from "../components/styles/Destination.styled";
import moon from '../assets/destination/image-moon.png'

const Destination = () => {
    return (
        <Page>
            <Parent>
                <StaticText><StaticNumber>01</StaticNumber>PICK YOUR DESTINATION</StaticText>
                <Child>
                    <ImageContainer src={moon} />
                    <Uncle>
                        <PlanetNav>
                            <div>MOON</div>
                            <div>MARS</div>
                            <div>EUROPA</div>
                            <div>TITAN</div>
                        </PlanetNav>
                        <PlanetName>MOON</PlanetName>
                        <PlanetDesc>See our planet as you’ve never seen it before. A perfect 
                            relaxing trip away to help regain perspective and come back refreshed. 
                            While you’re there, take in some history by visiting the Luna 2 and 
                            Apollo 11 landing sites.
                        </PlanetDesc>
                        <PlanetInfoBox>
                            <PlanetData>
                                <InfoHead>AVG. DISTANCE</InfoHead>
                                <InfoStat>384,000 KM</InfoStat>
                            </PlanetData>
                            <PlanetData>
                                <InfoHead>EST. TRAVEL TIME</InfoHead>
                                <InfoStat>3 DAYS</InfoStat>
                            </PlanetData>
                        </PlanetInfoBox>

                    
                    </Uncle>

                </Child>
            </Parent>

        </Page>
    )
}


export default Destination;