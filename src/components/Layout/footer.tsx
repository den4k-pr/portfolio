import { Link, useLocation } from "react-router-dom";
import { listIcons, listLinks } from "../../templates/footerTemplates";

export const Footer = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isFormContactActive = queryParams.get('form') === 'contact';

    return (
        <footer className="footer">
            <p className="footer-text">Copyright © 2024 | All Rights Reserved.</p>
            <ul className="footer__list">
                {listLinks.map((link, index) => {
                    const isActive =
                        location.pathname === link.to ||
                        (link.to === '?form=contact' && isFormContactActive);

                    const toPath =
                        link.to === '?form=contact'
                            ? `${location.pathname}?form=contact`
                            : link.to;

                    return (
                        <li key={index}>
                            <Link
                                className={`footer__list-link ${
                                    isActive ? 'activeLink' : ''
                                }`}
                                to={toPath}
                                onClick={isActive ? (e) => e.preventDefault() : undefined}
                            >
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul className="footer__list">
                {listIcons.map((icon, index) => (
                    <li key={index}>
                        <Link
                            className="footer__list-icon"
                            to={icon.to}
                            onClick={location.pathname === icon.to ? (e) => e.preventDefault() : undefined}
                        >
                            <img src={icon.img} alt={`icon-${index + 1}`} />
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
};
