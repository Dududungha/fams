import { useState, useEffect } from 'react';

function initWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return { width, height }
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(initWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(initWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return windowDimensions;
}