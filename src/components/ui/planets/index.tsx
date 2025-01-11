import { Link, useLocation, useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import { useAdaptiveSize } from "../../../hooks/useAdaptiveSize";
import { PlanetComponent } from "./planet";

export const Planets: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (path: string) => (e: MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === path) {
            e.preventDefault();
            navigate("/hello");
        }
    };

    const radius = useAdaptiveSize({
        initial: 150,
        mobile: 120,
        windowSize: 600
    })

    return (
        <div className="planets">
            <Link 
                to="/skills" 
                onClick={handleLinkClick("/skills")}
                className={`planetBody ${location.pathname === "/skills" ? "planetLeft" : location.pathname === "/work" ? "planetRight" : ""}`}
            >
                <PlanetComponent size={radius} />
            </Link>
            <Link 
                to="/work" 
                onClick={handleLinkClick("/work")}
                className={`planetBody ${location.pathname === "/skills" ? "planetLeft" : location.pathname === "/work" ? "planetRight" : ""}`}
            >
                <PlanetComponent size={radius} />
            </Link>
        </div>
    );
};
