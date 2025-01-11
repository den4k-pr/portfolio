import { useEffect, useState } from "react";

interface validationAdaptive {
    initial: number;
    adaptive: number;
}

interface AdaptiveProps {
    top: validationAdaptive;
    left: validationAdaptive;
}

export const useAdaptiveGreeting = ({ top, left }: AdaptiveProps) => {
    const [greetingTop, setGreetingTop] = useState(top.initial);
    const [greetingLeft, setGreetingLeft] = useState(left.initial);

    const updateGreetingPosition = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 870) {
            setGreetingTop(top.adaptive);
            setGreetingLeft(left.adaptive);
        } else {
            setGreetingTop(top.initial);
            setGreetingLeft(left.initial);
        }
    };

    useEffect(() => {
        updateGreetingPosition();

        window.addEventListener('resize', updateGreetingPosition);

        return () => {
            window.removeEventListener('resize', updateGreetingPosition);
        };
    }, [top, left]);

    return { greetingTop, greetingLeft };
};
