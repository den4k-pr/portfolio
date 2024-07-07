import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface validateAdaptive {
    initial: number;
    mobile: number;
    windowSize: number;
}

export const useAdaptiveSize = ({initial, mobile, windowSize}: validateAdaptive) => {
    const [radius, setRadius] = useState(initial);

    const updateRadius = () => {
        if (window.innerWidth <= windowSize) {
            setRadius(mobile);
        } else {
            setRadius(initial);
        }
    };

    useEffect(() => {
        updateRadius(); // Set initial radius based on the initial window size
        window.addEventListener("resize", updateRadius);

        return () => {
            window.removeEventListener("resize", updateRadius);
        };
    }, []);

    return radius
}