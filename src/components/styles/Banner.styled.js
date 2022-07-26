import styled from "styled-components";
import img from '../../assets/home/background-home-desktop.jpg'

export const Banner = styled.div`
    display: flex;
    flex-direction: columns;
    justify-content: space-between;
    width: 100%;
    position: relative;
    margin: 0;
    min-height: 100vh;
    max-height: 100%;
    background: url(${img}) no-repeat center center fixed;
    background-size: cover;
`