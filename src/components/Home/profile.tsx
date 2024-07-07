import { useLocation } from "react-router-dom";
import { AnimatedCircle } from "../ui/animatedCircles/circle"
import { useAdaptiveSize } from "../../hooks/useAdaptiveSize";
import { Face } from "./face";
import { profileList } from "../../templates/profileTemplate";

export const Profile = () => {
    const location = useLocation();
    const radius = useAdaptiveSize({
        initial: 200,
        mobile: 150,
        windowSize: 600
    })

    return(
        <section className="profile">
            <div className={`profile-circle ${location.pathname === "/hello" ? "activeProfile" : ""}`}>
                <AnimatedCircle radius={radius} strokeWidth={2} whitePosition={100} position={1000} whiteSize={location.pathname === "/hello" ? 200 : 0} />
                <Face />
            </div>
            <ul className={`profile__list ${location.pathname === "/hello" ? "activeProfileList" : ""}`}>
                {profileList.map(link => 
                    <li key={link} className="profile__list-link">
                        {link}
                    </li>
                )}
            </ul>
        </section>
    )
}