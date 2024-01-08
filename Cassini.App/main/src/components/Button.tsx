import "./styles/Button.scss";
import {ReactNode} from "react";

type Properties = {
    useIcon?: boolean
    className?: string
    useCustomIcon?: ReactNode
    iconClass?: string,
    children?: string,
}
export function Button({children: text, iconClass, useIcon, useCustomIcon, className}: Properties) {

    let icon: ReactNode;
    let iconClassName: string = 'icon ' + (iconClass ? iconClass : '');

    if(useIcon || iconClass) {
        icon = <div className={iconClassName}></div>
    }

    else if(useCustomIcon) {
        icon = useCustomIcon;
    }

    return <div className={'button' + (className ? ` ${className}` : '')}>
        {icon}
        {text && <div className='text'>{text}</div>}
    </div>
}