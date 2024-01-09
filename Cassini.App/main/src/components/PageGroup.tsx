import {PageCollection} from "../types/Documents";
import "./styles/PageGroup.scss";
import {useState} from "react";

type Properties = {
    pageGroup: PageCollection
}
export function PageGroup({pageGroup}: Properties) {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const handleMouseEnter = ()=> {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return <div
        className={'page-group' + (isHovered ? ' hovered' : '')}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >

        <div className='details'>
            <div className='expandable'>
                <div className='toggle-button'></div>
                <div className='group-name'>{pageGroup.title}</div>
            </div>
            <div className='create-page-button'>
                <div className='icon'></div>
            </div>

        </div>
    </div>
}