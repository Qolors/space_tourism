import { Page, Parent, HorizonBox, BubbleBox, Bubbles, InfoBox, TechImage, TechInfo, Terminology, TechTitle  } from "../components/styles/Technology.styled";
import { StaticText, StaticNumber } from "../components/styles/Destination.styled";

const Technology = ({ props, onTech }) => {
    return (
        <Page>
            <Parent>
            <StaticText><StaticNumber>03</StaticNumber>SPACE LAUNCH 101</StaticText>
                <HorizonBox>
                    <BubbleBox>
                        <Bubbles onClick={() => onTech('1')}>1</Bubbles>
                        <Bubbles onClick={() => onTech('2')}>2</Bubbles>
                        <Bubbles onClick={() => onTech('3')}>3</Bubbles>
                    </BubbleBox>
                    <InfoBox>
                        <Terminology>THE TERMINOLOGY...</Terminology>
                        <TechTitle>{props.name}</TechTitle>
                        <TechInfo>{props.body}</TechInfo>
                    </InfoBox>
                    <TechImage src={props.image} />
                </HorizonBox>

            </Parent>

        </Page>
    )
};

export default Technology;