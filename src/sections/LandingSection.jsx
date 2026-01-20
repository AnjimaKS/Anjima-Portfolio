import React, { useEffect, useState } from 'react';
import './LandingSection.css';

const LandingSection = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="landing-section">
            <div className="shooting-star">
                <div className="star-streak"></div>
                <div className="star-streak"></div>
                <div className="star-streak"></div>
            </div>

            <div className="landing-content" style={{ transform: `translateY(${offset * 0.5}px)` }}>
                <h1 className="landing-title">Anjima KS</h1>
                <h2 className="landing-subtitle">
                    MCA (AI & Data Science) | Web Developer | UI/UX Designer
                </h2>
                <p className="landing-intro">
                    I am a <span>web developer</span> and <span>AI enthusiast</span> with a passion for crafting immersive digital experiences.
                    Merging creative <span>UI/UX design</span> with deep learning and interactive technology to explore the cosmos of code.
                </p>
            </div>
        </section>
    );
};

export default LandingSection;
