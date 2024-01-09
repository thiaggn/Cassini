import {Topic} from "../types/Documents";
import "./styles/Sections.scss";

type Properties = {
    openPage: () => void,
    selectedTopic: Topic
}

export function SectionList({selectedTopic, openPage}: Properties) {

    return <div className='sections-view'>
        <div className='header'>
            <div className='icon' style={{backgroundColor: selectedTopic.color}}></div>
            <div className='title'>{selectedTopic.title}</div>
        </div>

        <div className='list'>

        </div>
    </div>
}