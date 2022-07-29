import { Page, Parent, Left, ImageContainer, Role, Fullname, PersonDesc, NavCircle, CrewNav } from "../components/styles/Crew.styled";
import { StaticText, StaticNumber, Child } from "../components/styles/Destination.styled";

const Crew = ({ props, onCrew }) => {
    return (
        <Page>
            
            <Parent>
                <StaticText><StaticNumber>02</StaticNumber>MEET YOUR CREW</StaticText>
                <Child>
                    <Left>
                        <Role>{props.title}</Role>
                        <Fullname>{props.name}</Fullname>
                        <PersonDesc>{props.body}</PersonDesc>
                        <CrewNav>
                            <NavCircle onClick={() => onCrew('shuttleworth')}/>
                            <NavCircle onClick={() => onCrew('glover')}/>
                            <NavCircle onClick={() => onCrew('hurley')}/>
                            <NavCircle onClick={() => onCrew('ansari')}/>
                        </CrewNav>
                    </Left>
                    <ImageContainer src={props.image} />
                </Child>
            </Parent>
        </Page>
    )
};

export default Crew;