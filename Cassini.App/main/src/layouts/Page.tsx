import  "./styles/View.scss";
import {ReactElement} from "react";

type Properties = {
    view?: ReactElement
}
export function Page({view}: Properties) {
    return <div className='view'>
        {view}
    </div>
}