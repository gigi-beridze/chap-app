export default function Nav(props: any) {
    return (
        <nav className="grid grid-cols-2 place-content-between items-center w-full">
            <h4>home</h4>
            <img onClick={props.toggleDarkMode} 
                 className="self-left justify-self-end" 
                 src={props.darkMode ? "./assets/toggle-icon-dark.svg" : "./assets/toggle-icon-dark.svg"} />
                 </nav>
    )
}