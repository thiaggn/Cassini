import "./assets/App.scss";
import {Sidebar} from "./layouts/Sidebar";
import {Navbar} from "./layouts/Navbar";
import {Page} from "./layouts/Page";
import {ReactElement, useState} from "react";
import {PageView} from "./types/PageView";

export function App() {

    const [pageView, setPageView] = useState<PageView>(PageView.Initial);

    let viewElement: ReactElement | undefined;

    switch (pageView) {
        case PageView.Initial:
            viewElement = <div className='initial-view'></div>
            break;
        case PageView.Document:
            break
    }

    return <div className='app'>
        <Navbar/>
        <Sidebar/>
        <Page view={viewElement}/>
    </div>
}