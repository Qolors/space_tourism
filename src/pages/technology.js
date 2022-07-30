import { Page, Parent, HorizonBox, BubbleBox, Bubbles, InfoBox, TechImage, TechInfo, Terminology, TechTitle  } from "../components/styles/Technology.styled";
import { StaticText, StaticNumber } from "../components/styles/Destination.styled";
import { motion } from "framer-motion";

import launch from '../assets/technology/image-launch-vehicle-portrait.jpg';
import capsule from '../assets/technology/image-space-capsule-portrait.jpg';
import port from '../assets/technology/image-spaceport-portrait.jpg';
import Animated from "../components/Animated";

const Technology = ({ props, onTech, image }) => {
    return (
        <Animated>
        <Page>
            <Parent>
                <StaticText><StaticNumber>03</StaticNumber>SPACE LAUNCH 101</StaticText>
                <HorizonBox 
                    key={image}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, scale: 0.5, opacity: 0 }}            
                    transition={{ duration: 1 }}
                    as={motion.div}
                >
                    <BubbleBox>
                        <Bubbles onClick={() => onTech('1', launch)}>1</Bubbles>
                        <Bubbles onClick={() => onTech('2', capsule)}>2</Bubbles>
                        <Bubbles onClick={() => onTech('3', port)}>3</Bubbles>
                    </BubbleBox>
                    <InfoBox>
                        <Terminology>THE TERMINOLOGY...</Terminology>
                        <TechTitle>{props.name}</TechTitle>
                        <TechInfo>{props.body}</TechInfo>
                    </InfoBox>
                    <TechImage src={image} />
                </HorizonBox>

            </Parent>

        </Page>
        </Animated>
    )
};

export default Technology;