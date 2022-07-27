import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../firebase.config";
import { Page, Parent, Left, ImageContainer, Role, Fullname, PersonDesc } from "../components/styles/Crew.styled";
import mark from '../assets/crew/image-mark-shuttleworth.png';

const Crew = () => {
    return (
        <Page>
            <Parent>
                <Left>
                    <Role>MISSION SPECIALIST</Role>
                    <Fullname>MARK SHUTTLEWORTH</Fullname>
                    <PersonDesc>Mark Richard Shuttleworth is the founder and CEO of Canonical, 
                        the company behind the Linux-based Ubuntu operating system. 
                        Shuttleworth became the first South African to travel to space as a space tourist.
                    </PersonDesc>
                </Left>
                <ImageContainer src={mark} />

            </Parent>
        </Page>
    )
};

export default Crew;