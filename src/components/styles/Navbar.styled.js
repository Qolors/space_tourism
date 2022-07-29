import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { device } from './device';


export const Navigations = styled.div`
    width: 70%;
    max-width: 700px;
    display: inline-flex;
    flex-direction: row-reverse;
    height: 75%;
    align-items: center;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(10px);
    padding-right: 4em;
    padding-left: 2em;
    padding-bottom: 2px;
    gap: 1em;
    @media ${device.mobile} {
        padding: 0;
        width: 80%;
        height: 60%;
        padding-right: 1em;
        background-color: rgba(0, 0, 0, 0);
    }
`

export const NavLink = styled(Link)`
    background-color: transparent;
    display: flex;
    height: 100%;
    width: 100%;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    gap: .5em;
    z-index: 1;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0);
    &:hover {
        border-bottom: 1px solid white;
        transition: border .5s ease-in-out;
        cursor: pointer;
    }
`

/*MAIN PARENT */

export const NavBox = styled.div`
    width: 100%;
    display: inline-flex;
    top: 0;
    left: 0;
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    @media ${device.mobile} {
        height: 75px;
        gap: 1em;
    }
    
`

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    padding-left: 4em;
    @media ${device.mobile} {
        width: 25px;
        height: 25px;
        padding-left: 1em;
    }
`