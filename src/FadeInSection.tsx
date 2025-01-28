import React, { useEffect, useState, useRef } from 'react';

import './FadeInSection.css';

function FadeInSection({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        const sect = sectionRef.current;
        if (sect) {
            observer.observe(sect);
        }

        return () => {
            if (sect) {
                observer.unobserve(sect);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className={`FadeInSection ${isVisible ? 'visible' : ''}`}>
            { children }
        </div>
    )
}

export default FadeInSection;