import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { selectNumberValue } from "../../../store/slices/chooseCategory";
import { AnimatedCircle } from "./circle"
import { useAdaptiveSize } from "../../../hooks/useAdaptiveSize";

export const AnimatedCircles = () => {
    const numberValue = useSelector((state: RootState) => selectNumberValue(state));
    
    const radius = useAdaptiveSize({
        initial: 170,
        mobile: 140,
        windowSize: 600
    })

    return(
        <section className="circles">
            <AnimatedCircle radius={radius} strokeWidth={2} whitePosition={800} position={100} whiteSize={100} />
            <AnimatedCircle radius={radius} strokeWidth={2} whitePosition={numberValue} position={100} whiteSize={100} />
        </section>
    )
}