type Properties= {
    className?: string,
    icon: string
}
export function NavbarButton(props: Properties) {
    return <div className='button'>
        <div className={'icon ' + props.icon }></div>
    </div>
}