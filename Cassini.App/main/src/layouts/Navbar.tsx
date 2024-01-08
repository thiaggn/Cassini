import "./styles/Navbar.scss";
import {Button} from "../components/Button";
export function Navbar() {
    return <div className='navbar'>
        <div className='button-list'>
            <Button iconClass='start'></Button>
            <Button iconClass='search'></Button>
            <Button iconClass='settings'></Button>
            <Button iconClass='compose'></Button>
        </div>
    </div>
}