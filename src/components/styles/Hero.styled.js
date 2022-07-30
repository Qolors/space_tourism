import styled from "styled-components";
import { keyframes } from "styled-components";
import { device } from "./device";

export const HeroBox = styled.div`
    display: flex;
    width: 75%;
    margin: auto;
    color: white;
    flex-direction: row;

    @media ${device.mobile} {
        flex-direction: column;
    }
`

export const HeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;

    @media ${device.mobile} {
        align-items: center;
    }

`

export const HeroRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Hero1 = styled.span`
    font-size: 2em;
    @media ${device.mobile} {
        font-size: 1em;
    }
`

export const Hero2 = styled.span`
    font-size: 8.5em;
    letter-spacing: .75rem;
    @media ${device.mobile} {
        font-size: 5em;
    }
`

export const Hero3 = styled.p`

    word-wrap: break-word;
    max-width: 50ch;
    line-height: 2em;
    font-size: 1em;
    font-weight: bold;
    text-shadow: 1px 1px black;

`

const breathe = keyframes`

    0% {
        opacity: 0;
        transform: scale(0.9);
        backdrop-filter: blur(0px);
    }

    25% {
        backdrop-filter: blur(5px);
    }

    50% {
        opacity: 0.5;
        transform: scale(0.9);
        backdrop-filter: blur(10px);
        box-shadow: 0 0 3em rgba(135, 194, 237, 0.5);
    }

    75% {
        backdrop-filter: blur(0px);
    }

    100% {
        opacity: 0;
        backdrop-filter: blur(0px);
}

`

export const Enter = styled.div`
    height: 250px;
    width: 250px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    animation: ${breathe} 4s ease-out infinite normal;
    &:hover {
        cursor: pointer;
        opacity: 1.0;
    }
`