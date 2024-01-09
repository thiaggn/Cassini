import {Topic} from "../types/Documents";
import {CreatedTopics} from "./placeholders/CreatedTopics";

export class API {
    static getTopics(): Topic[] {
        return CreatedTopics;
    }
    static getPageContent() {

    }
}