import { Navigations, NavLink, NavBox, Logo } from "./styles/Navbar.styled"
import log from '../assets/shared/logo.svg'

const Navbar = () => {
    return (
        <NavBox>
            <Logo src={log} alt="logo" />
            <Navigations>
                <NavLink to='/technology'><strong>02</strong>TECHNOLOGY</NavLink>
                <NavLink to='/crew'><strong>03</strong>CREW</NavLink>
                <NavLink to='/destination'><strong>01</strong>DESTINATION</NavLink>
                <NavLink to='/'><strong>00</strong>HOME</NavLink>
            </Navigations>
        </NavBox>

    )
}

export default Navbar;