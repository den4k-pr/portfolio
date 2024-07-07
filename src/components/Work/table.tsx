import { Link } from "react-router-dom";
import { useWorkTableAnimation } from "../../hooks/useWorkTableAnimation";
import { useMemo } from "react";

export const WorkTable = () => {
    const { scrollRef, handleMouseEnter, handleMouseLeave, result } = useWorkTableAnimation();

    const memoizedItems = useMemo(() => {
        return result.map((item, index) => (
            <div key={index} className="table-item">
                {index % 2 === 0 ? (
                    <>
                        <div className="item__info">
                            <h2 className="item__info-title">{item.title}</h2>
                            <span className="item__info-number">{index + 1}</span>
                            <Link to={item.link} className="item__info-link">
                                <img src="/icons/link.svg" alt={`link-${index + 1}`} />
                            </Link>
                        </div>
                        <div className="work-image">
                            <img src={item.img} alt={`Work ${index + 1}`} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="work-image">
                            <img src={item.img} alt={`Work ${index + 1}`} />
                        </div>
                        <div className="item__info">
                            <h2 className="item__info-title">{item.title}</h2>
                            <span className="item__info-number">{index + 1}</span>
                            <Link to={item.link} className="item__info-link">
                                <img src="/icons/link.svg" alt={`link-${index + 1}`} />
                            </Link>
                        </div>
                    </>
                )}
            </div>
        ));
    }, [result]);

    return (
        <section className="work__table">
            <div
                ref={scrollRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="table"
            >
                {memoizedItems}
            </div>
        </section>
    );
};
