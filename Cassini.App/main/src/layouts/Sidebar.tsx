import "./styles/Sidebar.scss";
import {ReactElement, useState} from "react";
import {SidebarView} from "../types/SidebarView";
import {TopicList} from "../components/TopicList";
import {SectionList} from "../components/SectionList";
import {Page, Topic} from "../types/Documents";
import {Logo} from "../components/Logo";


type Properties = {
    openPage: (page: Page) => void,
    openTopic: (topic: Topic) => void
}
export function Sidebar({openPage, openTopic}: Properties) {

    const [sidebarView, setSidebarView] = useState<SidebarView>(SidebarView.TopicList);
    const [selectedTopic, setSelectedTopic] = useState<Topic>();

    let viewElement: ReactElement = <div>Erro</div>;

    switch (sidebarView) {
        case SidebarView.TopicList:
            const handleTopicOpen = (topic: Topic): void => {
                setSelectedTopic(topic);
                setSidebarView(SidebarView.TopicSections);
            }

            viewElement = <TopicList openTopic={handleTopicOpen}/>;
            break;

        case SidebarView.TopicSections:
            if(selectedTopic == null) break;
            const handlePageOpen = () => {

            }

            viewElement = <SectionList selectedTopic={selectedTopic} openPage={handlePageOpen}/>
            break;
    }

    return <div className='sidebar'>
        <Logo/>
        <div className='header'>Tópicos</div>
        {viewElement}
    </div>
}