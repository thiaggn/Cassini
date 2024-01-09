type Properties = {
    children: string
}
export function PageButton({children: text}: Properties) {
    return <div className='page-button'>{text}</div>
}