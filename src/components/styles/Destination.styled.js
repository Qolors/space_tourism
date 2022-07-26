import styled from "styled-components";
import img from '../../assets/destination/background-destination-desktop.jpg'
import { device } from "./device";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    background: url(${img}) no-repeat center center fixed;
    background-size: cover;
    display: flex;
`

export const Parent = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    width: 70%;
    gap: 1em;
    @media ${device.mobile} {
        margin-top: 5em;
    }
`

export const Uncle = styled.div`
    display: flex;
    margin: auto;
    margin-left: 2em;
    flex-direction: column;
    @media ${device.mobile} {
        margin-left: auto;
        
    }
`

export const Child = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    height: 100%;
    gap: 5em;
    justify-content: center;
    align-items: center;
    @media ${device.mobile} {
        flex-direction: column;
        gap: 1em;
    }
`

export const StaticText = styled.div`
    display: flex;
    width: 100%;
    text-align: left;
    font-size: 2em;
    font-weight: bold;
    color: white;
    position: fixed;
    top: 5em;
    left: 5em;
    @media ${device.mobile} {
        font-size: 1.25em;
        text-align: center;
        margin-top: auto;
        justify-content: center;
        position: relative;
        top: 0;
        left: 0;
    }
`

export const StaticNumber = styled.span`
    opacity: 0.5;
    padding-right: 1em;
    @media ${device.mobile} {
        padding-left: 1em;
    }
`

export const ImageContainer = styled.img`
    display: flex;
    object-fit: center;
    min-width: 250px;
    min-height: 250px;
    max-height: 400px;
    max-width: 400px;
    padding: 1em;
    padding-right: 1em;
    @media ${device.mobile} {
        max-height: 200px;

    }
`

export const PlanetNav = styled.div`
    display: flex;
    width: 100%;
    gap: 1em;
    color: white;
    @media ${device.mobile} {
        justify-content: center;
    }
`

export const PlanetName = styled.h1`
    color: white;
    width: 100%;
    font-size: 2em;
    @media ${device.mobile} {
        text-align: center;
        font-size: 3em;
        padding: 0;
        margin: 0;
        margin-top: 1em;
    }
`
export const PlanetDesc = styled.p`
    color: white;
    word-wrap: break-word;
    max-width: 50ch;
    min-height: 150px;
    line-height: 2em;
    font-weight: bold;
    text-shadow: 2px 2px black;
`

export const PlanetInfoBox = styled.div`
    display: flex;
    width: 100%;
    border-top: 1px solid silver;
    gap: 0.5em;
    @media ${device.mobile} {
        flex-direction: column;
    }
`

export const PlanetData = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
    gap: 0.5em;
    margin-top: 1em;
    @media ${device.mobile} {
        align-items: center;
    }
`

export const InfoHead = styled.span`
    font-size: 1em;
    font-weight: thin;
`
export const InfoStat = styled.span`
    font-size: 2em;
    font-weight: bolder;
`
export const Button = styled.button`
    color: white;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    text-decoration: none;
    font-size: 1em;
    &:hover {
        border-bottom: 2px solid silver;
        cursor: pointer;
    }
`