import { useLocation } from "react-router-dom"
import { SkillsLines } from "../components/Skills/lines"
import { Greeting } from "../components/ui/greeting"
import { useAdaptiveGreeting } from "../hooks/useAdaptiveGreeting"

export const Skills = () => {
    const location = useLocation()
    const { greetingTop, greetingLeft } = useAdaptiveGreeting({
        top: { initial: 30, adaptive: 50 },
        left: { initial: location.pathname === "/skills" ? 65 : 50, adaptive: 75 },
    });
    
    return (
        <div className="skills">
            <SkillsLines />
            <div className="skillsGreeting">
                <Greeting addClass="greetingMobile" top={greetingTop} left={greetingLeft} title="Skills" text="Here are the main technologies I work with that help me create efficient and modern solutions." />
            </div>
        </div>
    )
}