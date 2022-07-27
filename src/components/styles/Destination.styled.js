import styled from "styled-components";
import img from '../../assets/destination/background-destination-desktop.jpg'

export const Page = styled.div`
    width: 100%;
    height: 100vh;
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
`

export const Uncle = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
`

export const Child = styled.div`
    display: flex;
    width: 100%;
    gap: 1em;
    justify-content: center;
    align-items: center;
    maring-top: 200px;
`

export const StaticText = styled.div`
    display: flex;
    width: 100%;
    text-align: left;
    font-size: 2em;
    font-weight: bold;
    color: white;

`

export const StaticNumber = styled.span`
    opacity: 0.5;
    padding-right: 1em;
`

export const ImageContainer = styled.img`
    display: flex;
    object-fit: center;
    min-width: 250px;
    min-height: 250px;
    max-height: 400px;
    max-width: 400px;
    padding: 1em;
    padding-right: 3em;
`

export const PlanetNav = styled.div`
    display: flex;
    width: 100%;
    gap: 1em;
    color: white;
`

export const PlanetName = styled.h1`
    color: white;
    width: 100%;
    font-size: 2em;
`
export const PlanetDesc = styled.p`
    color: white;
    word-wrap: break-word;
    max-width: 50ch;
    line-height: 2em;
`

export const PlanetInfoBox = styled.div`
    display: flex;
    width: 100%;
    border-top: 1px solid silver;
    gap: 0.5em;
    justify-content:
`

export const PlanetData = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
    gap: 0.5em;
    margin-top: 1em;
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