import "./styles/SubjectList.scss";
import {Subject} from "../types/Documents";
import {ReactNode, useEffect, useState} from "react";
import {MappedArray} from "../utils/MappedArray";
import {API} from "../utils/API";
import {SubjectButton} from "./SubjectButton";

type Properties = {
    openSubject: (subject: Subject) => void
}

export function SubjectList({openSubject}: Properties) {
    const [topics, setTopics] = useState<MappedArray<Subject> | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

    useEffect(()=> {
        const topics: Subject[] = API.getTopics();
        const keyedTopics: MappedArray<Subject> = new MappedArray(topics);
        setTopics(keyedTopics);
    },[])

    useEffect(() => {
        if(selectedSubject) {
            setTimeout(()=> {
                openSubject(selectedSubject);
            }, 200)
        }
    }, [selectedSubject, openSubject]);

    const handleTopicOpen = (topic: Subject) => {
        setSelectedSubject(topic);
    }

    return <div className='subject-view'>
        <div className={'list' + (selectedSubject ? ' fade-out' : '')}>
            {topics && topics.map<ReactNode>((topic: Subject, key: number, index: number) => {
                return <SubjectButton key={key} topic={topic} openTopic={handleTopicOpen}/>
            })}
        </div>
    </div>

}