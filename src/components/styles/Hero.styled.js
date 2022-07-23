import styled from "styled-components";
import { keyframes } from "styled-components";

export const HeroBox = styled.div`
    display: flex;
    width: 75%;
    margin: auto;
    color: white;
`

export const HeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;

`

export const HeroRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Hero1 = styled.span`
    font-size: 2em;
`

export const Hero2 = styled.span`
    font-size: 8.5em;
    letter-spacing: .75rem;
`

export const Hero3 = styled.p`

    word-wrap: break-word;
    max-width: 50ch;
    line-height: 2em;
    font-size: 1em;
    font-weight: thin;

`

const gradient = keyframes`

    0% {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    }
    50% {
        background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    }
    100% {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    }
}

`

export const Enter = styled.div`
    height: 250px;
    width: 250px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    border-radius: 50%;
    text-align: center;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    animation: ${gradient} 2s infinite;
    &:hover {
        cursor: pointer;
    }
`