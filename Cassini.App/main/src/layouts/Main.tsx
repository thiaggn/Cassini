import  "./styles/View.scss";
import {ReactElement} from "react";

type Properties = {
    view?: ReactElement
}
export function Main({view}: Properties) {
    return <main className='main'>
        {view}
    </main>
}