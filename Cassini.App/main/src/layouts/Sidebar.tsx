import "./styles/Sidebar.scss";
import {ReactElement, useState} from "react";
import {SidebarView} from "../types/SidebarView";
import {TopicList} from "../components/TopicList";
import {PageList} from "../components/PageList";
import {CreatedTopics} from "../lib/placeholder/CreatedTopics";
import {Topic} from "../types/Documents";
import {Logo} from "../components/Logo";

export function Sidebar() {

    const [sidebarView, setSidebarView] = useState<SidebarView>(SidebarView.SubjectList);

    let viewElement: ReactElement;

    switch (sidebarView) {
        case SidebarView.SubjectList:
            const handleSubjectOpen = (subject: Topic): void => {
                setSidebarView(SidebarView.PageList);
            }

            viewElement = <TopicList topics={CreatedTopics} openSubject={handleSubjectOpen}/>;
            break;

        case SidebarView.PageList:
            const handlePageOpen = () => {

            }

            viewElement = <PageList openPage={handlePageOpen}/>
    }

    return <div className='sidebar'>
        <Logo/>
        {viewElement}
    </div>
}