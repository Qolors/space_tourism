import { Navigations, NavLink, NavBox, Logo } from "./styles/Navbar.styled"
import log from '../assets/shared/logo.svg'

const Navbar = () => {
    return (
        <NavBox>
            <Logo src={log} alt="logo" />
            <Navigations>
                <NavLink to='/'><strong>03</strong>HOME</NavLink>
                <NavLink to='/destination'><strong>02</strong>DESTINATION</NavLink>
                <NavLink to='/crew'><strong>01</strong>CREW</NavLink>
                <NavLink to='/technology'><strong>00</strong>TECHNOLOGY</NavLink>
            </Navigations>
        </NavBox>

    )
}

export default Navbar;