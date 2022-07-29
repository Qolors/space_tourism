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
        align-items: center;
        gap: 2em;
        margin-top: 5em;
    }
    
`

export const Child = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    gap: 1em;
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
    height: 80%;
    gap: 1em;
`

export const ImageContainer = styled.img`
    display: flex;
    height: 70%;
    max-height: 600px;
    margin-top: auto;
    @media ${device.mobile} {
        max-height: 400px;
    }
`

export const Role = styled.h2`
    font-weight: bold;
    opacity: 0.4;
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
    @media ${device.mobile} {
        min-height: 100px;
    }
`

export const CrewNav = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 2em;
    width: 100%;
    @media ${device.mobile} {
        justify-content: center;
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