import styled from "styled-components";
import img from '../../assets/crew/background-crew-desktop.jpg';
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
    flex-direction: column;
    margin: auto;
    width: 70%;
    margin-bottom: 0;
    align-items: center;
    @media ${device.mobile} {
        gap: 2em;
        justify-content: flex-end;
    }
    
`

export const Child = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    gap: 2em;
    align-items: center;
    justify-content: center;
    @media ${device.mobile} {
        flex-direction: column;

    }
`


export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    gap: 1em;
    position: fixed;
    bottom: 1em;
    left: 15em;
    @media ${device.mobile} {
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        bottom: 0;
        left: 0;
    }
`

export const ImageContainer = styled.img`
    display: flex;
    height: 100%;
    max-height: 700px;
    margin-left: 5em;
    margin-bottom: 0;

    @media ${device.mobile} {
        height: 600px;
        width: 100%;
        margin-left: auto;
    }
`

export const Role = styled.h2`
    font-weight: bold;
    opacity: 0.1;
    color: gray;
    font-size: 2em;
    text-align: left;
    width: 100%;
    margin: 0;
    @media ${device.mobile} {
        font-size: 1.5em;
        text-align: center;
    }

`

export const Fullname = styled.h1`
    font-weight: bold;
    font-size: 3em;
    text-align: left;
    width: 100%;
    margin: 0;
    @media ${device.mobile} {
        font-size: 2em;
        text-align: center;
    }
`

export const PersonDesc = styled.p`
    color: white;
    word-wrap: break-word;
    max-width: 50ch;
    min-height:250px;
    line-height: 2em;
    margin-right: auto;
    font-weight: bold;
    text-shadow: 2px 2px black;
    @media ${device.mobile} {
        min-height: 100px;
    }
`

export const CrewNav = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 2em;
    width: 100%;
    position: fixed;
    bottom: 5em;
    left: 15em;
    @media ${device.mobile} {
        justify-content: center;
        position: relative;
        bottom: 0;
        left: 0;
    }

`

export const NavCircle = styled.button`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    text-decoration: none;
    border: none;
    &:hover { cursor: pointer;}
`