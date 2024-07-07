import React, { useState, useEffect } from 'react';

export const Preloader = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoaded(true);
            }, 500);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div style={{opacity: loaded ? "0" : "1", visibility: loaded ? "hidden" : "visible"}} className="preloader rocket-preloader">
            <div style={{ transition: "all 1s", transform: loaded ? "translateX(1000px)" : "translateX(0px)" }}>
                <div className='rocket-fierOne'></div>
                <div className="rocket"></div>
                <div className='rocket-fierTwo'></div>
            </div>
        </div>
    );
};
