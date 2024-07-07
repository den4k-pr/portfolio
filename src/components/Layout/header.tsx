import { Link } from "react-router-dom"
import { listIcons } from "../../templates/footerTemplates"
import { useState } from "react"


export const Header = () => {
    const [burger, setBurger] = useState(false)

    return(
        <header className="header">
            <img className="headerLogo" src="/icons/logo.png" alt="" />
            <nav onClick={() => setBurger(!burger)} className={`burger ${burger ? "activeButton" : ""}`}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </nav>
            <nav className={`burgerMenu ${burger ? "activeMenu" : ""}`}>
                <ul className="burgerMenu__list">
                    {listIcons.map((link, index) =>
                        <li key={index}>
                            <Link className="burgerMenu__list-icon" to={link.to}>
                                <img src={link.img} alt={`icon-${index+1}`}/>
                            </Link>
                        </li>
                    )}
                </ul>
                <p className="burgerMenu-text">Copyright © 2024 | All Rights Reserved.</p>
            </nav>
        </header>
    )
}