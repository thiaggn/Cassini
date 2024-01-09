import "./styles/Topics.scss";
import {Topic} from "../types/Documents";
import {ReactNode, useEffect, useState} from "react";
import {MappedArray} from "../utils/MappedArray";
import {API} from "../utils/API";
import {TopicButton} from "./TopicButton";

type Properties = {
    openTopic: (subject: Topic) => void
}

export function TopicList({openTopic}: Properties) {
    const [topics, setTopics] = useState<MappedArray<Topic> | null>(null);

    useEffect(()=> {
        const topics: Topic[] = API.getTopics();
        const keyedTopics: MappedArray<Topic> = new MappedArray(topics);
        setTopics(keyedTopics);
    },[])


    return <div className='topic-view'>
        <div className='list'>
            {topics && topics.map<ReactNode>((topic: Topic, key: number) => {
                return <TopicButton key={key} topic={topic}/>
            })}
        </div>
    </div>

}