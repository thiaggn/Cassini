import "./styles/Sidebar.scss";
import {ReactElement, useState} from "react";
import {SidebarView} from "../types/SidebarView";
import {SubjectList} from "../components/SubjectList";
import {SubjectContent} from "../components/SubjectContent";
import {Page, Subject} from "../types/Documents";
import {Logo} from "../components/Logo";


type Properties = {
    openPage: (page: Page) => void,
    openTopic: (topic: Subject) => void
}
export function Sidebar({openPage, openTopic}: Properties) {

    const [sidebarView, setSidebarView] = useState<SidebarView>(SidebarView.SubjectsList);
    const [selectedTopic, setSelectedSubject] = useState<Subject>();

    let viewElement: ReactElement = <div>Erro</div>;

    switch (sidebarView) {
        case SidebarView.SubjectsList:
            const handleSubjectOpen = (topic: Subject): void => {
                setSelectedSubject(topic);
                setSidebarView(SidebarView.SubjectContent);
            }

            viewElement = <SubjectList openSubject={handleSubjectOpen}/>;
            break;

        case SidebarView.SubjectContent:
            if(selectedTopic == null) break;
            const handlePageOpen = () => {

            }

            viewElement = <SubjectContent subject={selectedTopic} openPage={handlePageOpen}/>
            break;
    }

    return <div className='sidebar'>
        <Logo/>
        <div className='header'>Tópicos</div>
        {viewElement}
    </div>
}