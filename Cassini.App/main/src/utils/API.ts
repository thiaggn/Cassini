import {Subject} from "../types/Documents";
import {CreatedSubjects} from "./placeholders/CreatedSubjects";

export class API {
    static getTopics(): Subject[] {
        return CreatedSubjects;
    }
    static getPageContent() {

    }
}