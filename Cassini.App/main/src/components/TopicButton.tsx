import {Topic} from "../types/Documents";
import {useState} from "react";

type Properties = {
    topic: Topic;
}
export function TopicButton({topic}: Properties) {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return <div className='topic-button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={'icon' + (isHovered ? ' hovered' : '')} style={{background: topic.color}}></div>
        <div className='text'>{topic.title}</div>
    </div>
}