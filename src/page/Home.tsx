import { Greeting } from "../components/ui/greeting";
import { Profile } from "../components/Home/profile";
import { Planets } from "../components/ui/planets";
import { AnimatedCircles } from "../components/ui/animatedCircles";
import { useLocation } from "react-router-dom";
import { useAdaptiveGreeting } from "../hooks/useAdaptiveGreeting";

const Home = () => {
    const location = useLocation();
    const { greetingTop, greetingLeft } = useAdaptiveGreeting({
        top: { initial: 50, adaptive: 65 },
        left: { initial: location.pathname === "/hello" ? 33 : 18, adaptive: 35 },
    });

    return (
        <div className="home">
            <Planets />
            <AnimatedCircles />
            <Greeting
                addClass=""
                top={greetingTop}
                left={greetingLeft}
                title="Hello."
                text="Hi, I'm Den, a full-stack developer passionate about modern, efficient solutions in frontend and backend development."
            />
            <Profile />
        </div>
    );
};

export default Home;
