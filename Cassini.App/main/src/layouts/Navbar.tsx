import "./styles/Navbar.scss";
import {NavbarButton} from "../components/NavbarButton";
export function Navbar() {
    return <div className='navbar'>

        <div className='list'>
            <NavbarButton icon='start'></NavbarButton>
            <NavbarButton icon='search'></NavbarButton>
            <NavbarButton icon='settings'></NavbarButton>
            <NavbarButton icon='compose'></NavbarButton>
        </div>
    </div>
}