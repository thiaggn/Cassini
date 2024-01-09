import {Page, PageCollection, Subject} from "../types/Documents";
import "./styles/SubjectContent.scss";
import {CSSProperties} from "react";
import {MappedArray} from "../utils/MappedArray";
import {PageButton} from "./PageButton";
import {PageGroup} from "./PageGroup";

type Properties = {
    openPage: () => void,
    subject: Subject
}

export function SubjectContent({subject, openPage}: Properties) {

    const contents: MappedArray<Page | PageCollection> = new MappedArray(subject.content);
    const filling: CSSProperties = {background: subject.color};

    return <div className={'subject-content'}>
        <div className='header'>
            <div className='subject-color' style={filling}>
                <div className='icon'></div>
            </div>
            <div className='title'>{subject.title}</div>
        </div>

        <div className='list'>
            {contents.map((page: Page | PageCollection, key: number, index: number) => {
                if('pages' in page) {
                    return <PageGroup pageGroup={page}></PageGroup>
                }

                else if('blocks' in page) {
                    return <PageButton>{(page as Page).title}</PageButton>
                }
            })}
        </div>
    </div>
}