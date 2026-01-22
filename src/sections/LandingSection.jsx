import React, { useEffect, useState } from 'react';
import { FaSpaceShuttle } from 'react-icons/fa';
import './LandingSection.css';

const LandingSection = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => requestAnimationFrame(() => setOffset(window.scrollY));
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fade-out logic: Elements fade as you scroll down (travel forward)
    // Opacity goes from 1 to 0 over 600px of scrolling
    const fadeOpacity = Math.max(0, 1 - offset / 600);

    return (
        <section className="landing-section">
            {/* Deep Background - Nebulas (Standard Parallax) */}
            <div className="parallax-layer nebula-container" style={{ transform: `translateY(${offset * 0.2}px)` }}>
                <div className="nebula-cloud nebula-1"></div>
                <div className="nebula-cloud nebula-2"></div>
                <div className="nebula-cloud nebula-3"></div>
            </div>

            {/* Fading Deep Space Layer - Galaxies & Wandering Nebulae */}
            <div
                className="parallax-layer deep-space-layer"
                style={{
                    opacity: fadeOpacity,
                    transform: `translateY(${offset * 0.1}px) scale(${1 + offset * 0.0005})`
                }}
            >
                <div className="galaxy-spiral galaxy-1"></div>
                <div className="galaxy-spiral galaxy-2"></div>
                <div className="wandering-nebula wandering-1"></div>
                <div className="wandering-nebula wandering-2"></div>
            </div>



            <div className="shooting-star">
                <div className="star-streak"></div>
                <div className="star-streak"></div>
                <div className="star-streak"></div>
            </div>

            {/* Main Content - Text (Standard Scroll Speed) */}
            <div className="landing-content" style={{ transform: `translateY(${offset * 0.5}px)` }}>
                <h1 className="landing-title">Anjima KS</h1>
                <h2 className="landing-subtitle">
                    MCA (AI & Data Science) | Web Developer | UI/UX Designer
                </h2>
                <p className="landing-intro">
                    I am a <span>web developer</span> and <span>AI enthusiast</span> with a passion for crafting immersive digital experiences.
                    Merging creative <span>UI/UX design</span> with deep learning and interactive technology to explore the cosmos of code.
                </p>
                <div className="resume-btn-container">
                    <a href="https://drive.google.com/file/d/1gCgw_-NMTGGiQECyH8aAkfwvYV2ncho9/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="resume-btn">
                        View Resume
                    </a>
                </div>
            </div>


            {/* Foreground - Spacecraft */}
            <div className="parallax-layer spacecraft-container" style={{ transform: `translateY(${offset * 0.8}px)` }}>
                <div className="drifting-pod"></div>
            </div>


        </section>
    );
};

export default LandingSection;
