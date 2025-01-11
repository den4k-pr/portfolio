import { Link } from "react-router-dom";
import { useWorkTableAnimation } from "../../hooks/useWorkTableAnimation";
import React, { useMemo } from "react";

export const WorkTable = () => {
    const { scrollRef, handleMouseEnter, handleMouseLeave, result } = useWorkTableAnimation();

    const memoizedItems = useMemo(() => {
        return result.map((item) => (
            // @ts-ignore
            <div key={item.id} className="table-item">
                {result.indexOf(item) % 2 === 0 ? (
                    <>
                        <div className="item__info">
                            <h2 className="item__info-title">{item.title}</h2>
                            <span className="item__info-number">{result.indexOf(item) + 1}</span>
                            <Link to={item.link} className="item__info-link">
                                <img src="/icons/link.svg" alt={`link-${result.indexOf(item) + 1}`} />
                            </Link>
                        </div>
                        <div className="work-image">
                            <img src={`/work/${item.img}.png`} alt={`Work ${result.indexOf(item) + 1}`} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="work-image">
                            <img src={`/work/${item.img}.png`}  alt={`Work ${result.indexOf(item) + 1}`} />
                        </div>
                        <div className="item__info">
                            <h2 className="item__info-title">{item.title}</h2>
                            <span className="item__info-number">{result.indexOf(item) + 1}</span>
                            <Link to={item.link} className="item__info-link">
                                <img src="/icons/link.svg" alt={`link-${result.indexOf(item) + 1}`} />
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
