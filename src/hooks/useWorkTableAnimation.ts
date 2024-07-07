import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { selectStringValue } from "../store/slices/chooseCategory";
import { tableListType } from "../components/types/tableListType";
import { tableWork } from "../templates/tableWork";

export const useWorkTableAnimation = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const animationFrameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const stringValue = useSelector((state: RootState) => selectStringValue(state));

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        const scrollElement = scrollRef.current;

        if (scrollElement) {
            const duration = 50000; // 25 секунд
            const maxScrollTop = scrollElement.scrollHeight - scrollElement.clientHeight;

            const animate = (timestamp: number) => {
                if (!startTimeRef.current) startTimeRef.current = timestamp;
                const elapsed = timestamp - startTimeRef.current;

                let progress = (elapsed % duration) / duration;
                if (progress > 0.5) progress = 1 - progress;
                const scrollTop = maxScrollTop * (progress * 2);

                if (scrollElement && !isUserScrolling && !hasInteracted) {
                    scrollElement.scrollTop = scrollTop;
                }

                if (!isHovered && !isUserScrolling && !hasInteracted) {
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            };

            if (!isHovered && !isUserScrolling && !hasInteracted) {
                animationFrameRef.current = requestAnimationFrame(animate);
            }

            const handleInteraction = () => {
                setIsUserScrolling(true);
                setHasInteracted(true);
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }

                setTimeout(() => {
                    setIsUserScrolling(false);
                    setHasInteracted(false);
                    startTimeRef.current = null;
                    animationFrameRef.current = requestAnimationFrame(animate);
                }, 3000);
            };

            scrollElement.addEventListener("touchstart", handleInteraction);
            scrollElement.addEventListener("mousedown", handleInteraction);

            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
                scrollElement.removeEventListener("touchstart", handleInteraction);
                scrollElement.removeEventListener("mousedown", handleInteraction);
                window.removeEventListener("resize", checkIsMobile);
            };
        }
    }, [isHovered, isUserScrolling, hasInteracted, stringValue]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const filterItems = (items: tableListType[], stringValue: string) => {
        const filteredItems = items.filter((item) => item.category.some((cat) => cat === stringValue));
        return filteredItems.length > 0 ? filteredItems : items;
    };

    const result = filterItems(tableWork, stringValue);

    return { scrollRef, handleMouseEnter, handleMouseLeave, result };
};
