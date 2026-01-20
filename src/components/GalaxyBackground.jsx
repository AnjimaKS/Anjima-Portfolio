import React, { useEffect, useState } from 'react';
import './GalaxyBackground.css';

const GalaxyBackground = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Generate random stars for box-shadow
    const generateStars = (count) => {
        let value = '';
        for (let i = 0; i < count; i++) {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            value += `${x}vw ${y}vh #FFF, `;
        }
        return value.slice(0, -2);
    };

    const [starsSmall] = useState(generateStars(200));
    const [starsMedium] = useState(generateStars(100));
    const [starsLarge] = useState(generateStars(50));

    return (
        <div className="galaxy-background">
            <div
                className="star-layer stars-small"
                style={{ boxShadow: starsSmall, transform: `translateY(${offsetY * 0.1}px)` }}
            />
            <div
                className="star-layer stars-medium"
                style={{ boxShadow: starsMedium, transform: `translateY(${offsetY * 0.2}px)` }}
            />
            <div
                className="star-layer stars-large"
                style={{ boxShadow: starsLarge, transform: `translateY(${offsetY * 0.3}px)` }}
            />
            <div
                className="nebula"
                style={{ top: '10%', left: '20%', transform: `translateY(${offsetY * 0.05}px)` }}
            />
            <div
                className="nebula"
                style={{ bottom: '20%', right: '10%', background: 'radial-gradient(circle, rgba(0, 206, 201, 0.15) 0%, transparent 70%)', transform: `translateY(${!offsetY * 0.05}px) scale(1.5)` }}
            />
        </div>
    );
};

export default GalaxyBackground;
