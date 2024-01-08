import {Topic} from "../types/Documents";
import {Button} from "./Button";
import "./styles/TopicList.scss";

type Properties = {
    openSubject: (subject: Topic) => void,
    topics: Topic[]
}

export function TopicList({openSubject, topics}: Properties) {

    const handleTopicOpen = () => {
        
    }

    return <div className='topic-sidebar-view'>
        <div className='wrapper'>
            <div className='title'>Tópicos</div>
        </div>
        <div className='topic-list'>
            {topics.map((topic: Topic) => {
                let icon = <div className={'strip-icon'} style={{background: topic.color}}></div>
                return <Button key={topic.id} className={'topic-button'} useCustomIcon={icon}>{topic.title}</Button>
            })}
        </div>
    </div>

}