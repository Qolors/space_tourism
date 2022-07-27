import styled from "styled-components";
import img from '../../assets/crew/background-crew-desktop.jpg'

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
    width: 80%;
    gap: 1em;
    height: 70%;
    margin-bottom: 0;
`


export const Left = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    width: 100%;
    gap: 0.5em;
    align-items: center;
    height: 100%;
`

export const ImageContainer = styled.img`
    display: flex;
    height: 100%;
    margin-top: auto;
`

export const Role = styled.h2`
    font-weight: bold;
    opacity: 0.8;
    font-size: 2em;
    text-align: left;
    width: 100%;

`

export const Fullname = styled.h1`
    font-weight: bold;
    font-size: 3em;
    text-align: left;
    width: 100%;
`

export const PersonDesc = styled.p`
    color: white;
    word-wrap: break-word;
    max-width: 50ch;
    min-height: 150px;
    line-height: 2em;
`