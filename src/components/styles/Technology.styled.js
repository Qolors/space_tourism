import styled from "styled-components";
import img from '../../assets/technology/background-technology-desktop.jpg'
import { device } from "./device";


export const Page = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${img}) no-repeat center center fixed;
    background-size: cover;
    display: flex;

`

export const Parent = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin: auto;
    @media ${device.mobile} {
        width: 90%;
        margin-bottom: 0;
    }
`

export const HorizonBox = styled.div`
    display: flex;
    width: 100%;
    gap: 2em;
    align-items: center;
    @media ${device.mobile} {
        flex-direction: column;
        gap: 1em;
    }
`

export const BubbleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
    @media ${device.mobile} {
        flex-direction: row;
    }
`

export const Bubbles = styled.button`
    display: flex;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: black;
    border: 1px solid silver;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5em;
    &:hover { 
        cursor: pointer;
    }
    @media ${device.mobile} {
        width: 50px;
        height: 50px;
    }
`

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export const Terminology = styled.div`
    font-size: 1em;
`

export const TechTitle = styled.div`
    font-size: 2em;
    font-weight: bold;
    @media ${device.mobile} {
        text-align: center;
    }
`

export const TechInfo = styled.p`
    color: white;
    word-wrap: break-word;
    max-width: 50ch;
    min-height: 250px;
    line-height: 2em;
    margin-right: auto;
`

export const TechImage = styled.img`
    display: flex;
    border-radius: 2em;
    width: 100%;
    @media ${device.mobile} {
        border-radius: 0;
        aspect-ratio: 1 / 1;
        max-height: 300px;
    }
`
