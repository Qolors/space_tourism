import { Page, Parent, Left, ImageContainer, Role, Fullname, PersonDesc, NavCircle, CrewNav, Child } from "../components/styles/Crew.styled";
import { StaticText, StaticNumber } from "../components/styles/Destination.styled";
import { motion } from "framer-motion";
import ansari from '../assets/crew/image-anousheh-ansari.png';
import hurley from '../assets/crew/image-douglas-hurley.png';
import shuttleworth from '../assets/crew/image-mark-shuttleworth.png';
import glover from '../assets/crew/image-victor-glover.png';
import Animated from "../components/Animated";

const Crew = ({ props, onCrew, image}) => {
    return (
        <Animated>
        <Page>
            <Parent>
                <StaticText><StaticNumber>02</StaticNumber>MEET YOUR CREW</StaticText>
                <Child>
                    <Left>
                        <Role 
                        as={motion.div}
                        key={props.title}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, scale: 0.5, opacity: 0 }}
                        transition={{ duration: 1 }}
                        >{props.title}</Role>
                        <Fullname 
                        as={motion.div}
                        key={props.name}
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, scale: 0.5, opacity: 0 }}
                        transition={{ duration: 1 }}
                        >{props.name}</Fullname>
                        <PersonDesc 
                        as={motion.div}
                        key={props.body}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ x: -200, scale: 0.5, opacity: 0 }}
                        transition={{ duration: 2 }}
                        >{props.body}</PersonDesc>
                        <CrewNav>
                            <NavCircle onClick={() => onCrew('shuttleworth', shuttleworth)}/>
                            <NavCircle onClick={() => onCrew('glover', glover)}/>
                            <NavCircle onClick={() => onCrew('hurley', hurley)}/>
                            <NavCircle onClick={() => onCrew('ansari', ansari)}/>
                        </CrewNav>
                    </Left>
                    <ImageContainer
                        as={motion.img}
                        key={image}
                        initial={{ y: 200, scale: .75 , opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ x: 500, scale: 0.5, opacity: 0 }}
                        transition={{ duration: 1 }}
                        src={image} />
                </Child>
            </Parent>
        </Page>
        </Animated>
    )
};


export default Crew;