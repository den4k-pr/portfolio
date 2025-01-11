
interface GreatingTemplate {
    title: string;
    text: string;
    top: number;
    left: number;
    addClass: string;
}

export const Greeting = ({ addClass, title, text, top, left } : GreatingTemplate) => {
    
    return(
            <section className={`greeting ${addClass}`} style={{top: `${top}%`, left: `${left}%`}}>
                <h1 className="title">{title}</h1>
                <p className="greeting-text">{text}</p>
            </section>
    )
}