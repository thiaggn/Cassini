import {Subject} from "../types/Documents";
import {useState} from "react";

type Properties = {
    topic: Subject,
    openTopic: (topic: Subject) => void;
}
export function SubjectButton({topic, openTopic}: Properties) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    const handleMouseClick = () => {
        setIsClicked(true);
        openTopic(topic);
    }

    return <div className={'topic-button'}
                onClick={handleMouseClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
    >
        <div className={'icon' + ((isHovered && !isClicked) ? ' hovered' : '')} style={{background: topic.color}}></div>
        <div className='text'>{topic.title}</div>
    </div>
}