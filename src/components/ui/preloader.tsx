import React, { useState, useEffect } from 'react';

export const Preloader = () => {
    const [loaded, setLoaded] = useState(false);
    const [timeoutReached, setTimeoutReached] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoaded(true);
            }, 500)  
        };

        const handleTimeout = () => {
            setTimeoutReached(true);
        };

        const timeoutId = setTimeout(handleTimeout, 3000);

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    const isPreloaderHidden = loaded || timeoutReached;

    return (
        <div
            style={{
                opacity: isPreloaderHidden ? '0' : '1',
                visibility: isPreloaderHidden ? 'hidden' : 'visible',
                transition: 'opacity 1s, visibility 1s'
            }}
            className="preloader rocket-preloader"
        >
            <div
                style={{
                    transition: 'transform 1s',
                    transform: isPreloaderHidden ? 'translateX(1000px)' : 'translateX(0px)'
                }}
            >
                <div className="rocket-fierOne"></div>
                <div className="rocket"></div>
                <div className="rocket-fierTwo"></div>
            </div>
        </div>
    );
};
