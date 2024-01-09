import "./assets/App.scss";
import {Sidebar} from "./layouts/Sidebar";
import {Navbar} from "./layouts/Navbar";
import {Main} from "./layouts/Main";
import {ReactElement, useState} from "react";
import {MainView} from "./types/MainView";
import {Page, Topic} from "./types/Documents";
import {Editor} from "./layouts/Editor";

export function App() {

    const [currentView, setCurrentView] = useState<MainView>(MainView.Home);
    const [currentPage, setCurrentPage] = useState<Page>();

    const handlePageOpen = (page: Page) => {
        setCurrentPage(page);
        setCurrentView(MainView.PageEditor);
    }

    const handleTopicOpen = (topic: Topic) => {

    }

    let main: ReactElement | undefined;

    switch (currentView) {
        case MainView.Home:
            main = <div className='initial-view'></div>
            break;

        case MainView.PageEditor:
            main = currentPage && <Editor currentPage={currentPage}/>
            break
    }

    return <div className='app'>
        <Navbar/>
        <Sidebar openTopic={handleTopicOpen} openPage={handlePageOpen}/>
        <Main view={main}/>
    </div>
}