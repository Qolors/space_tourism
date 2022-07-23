import { Navigations, ButtonNav, NavBox, Logo } from "./styles/Navbar.styled"
import log from '../assets/shared/logo.svg'

const Navbar = () => {
    return (
        <NavBox>
            <Logo src={log} alt="logo" />
            <Navigations>
                <ButtonNav><strong>03</strong>HOME</ButtonNav>
                <ButtonNav><strong>02</strong>DESTINATION</ButtonNav>
                <ButtonNav><strong>01</strong>CREW</ButtonNav>
                <ButtonNav><strong>00</strong>TECHNOLOGY</ButtonNav>
            </Navigations>
        </NavBox>

    )
}

export default Navbar;