import { useLocation } from "react-router-dom"
import { WorkTable } from "../components/Work/table"
import { Greeting } from "../components/ui/greeting"
import { SortList } from "../components/Work/sortList"
import { useAdaptiveGreeting } from "../hooks/useAdaptiveGreeting"

export const Work = () => {
    const location = useLocation()
    const { greetingTop, greetingLeft } = useAdaptiveGreeting({
        top: { initial: 30, adaptive: 30 },
        left: { initial: location.pathname === "/work" ? 60 : 45, adaptive: 47 }
    });
    return(
        <div className="work">
            <div className="workGreeting">
                <Greeting addClass="greetingMobile" top={greetingTop} left={greetingLeft} title="Work" text="Explore my key projects that demonstrate my ability to create efficient and modern solutions." />
                <SortList />
            </div>
            <WorkTable />
        </div>
    )
}