import React, { useEffect, useRef, useState } from 'react';
import './SkillsSection.css';

const techSkills = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Python', icon: '🐍' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Tailwind', icon: '🌬️' },
    { name: 'React', icon: '⚛️' },
    { name: 'WordPress', icon: '📝' },
    { name: 'Figma', icon: '🖌️' },
    { name: 'Android', icon: '🤖' },
    { name: 'ML/AI', icon: '🧠' },
];

const softSkills = [
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Adaptability', icon: '🌊' },
    { name: 'Teamwork', icon: '🤝' },
    { name: 'Leadership', icon: '🦁' },
    { name: 'Creativity', icon: '💡' },
];

const SkillsSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="skills-section" ref={sectionRef}>
            <h2 className={`skills-title ${isVisible ? 'visible' : ''}`}>Cosmic Arsenal</h2>

            <div className="skills-container">
                {/* Decorative SVG Connection (Simplistic representation) */}
                <svg className="constellation-svg">
                    {/* Lines would ideally be calculated based on positions, but for static connection logic: */}
                    <line x1="10%" y1="20%" x2="30%" y2="50%" className="constellation-line" />
                    <line x1="30%" y1="50%" x2="70%" y2="20%" className="constellation-line" />
                    <line x1="70%" y1="20%" x2="90%" y2="60%" className="constellation-line" />
                    <line x1="50%" y1="50%" x2="50%" y2="90%" className="constellation-line" />
                </svg>

                <div className="skill-category">
                    <h3 className="category-title">Technical Expertise</h3>
                    <div className="skills-grid">
                        {techSkills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className={`skill-card ${isVisible ? 'visible' : ''}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skill-category">
                    <h3 className="category-title">Soft Skills</h3>
                    <div className="skills-grid">
                        {softSkills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className={`skill-card ${isVisible ? 'visible' : ''}`}
                                style={{ transitionDelay: `${(index + techSkills.length) * 100}ms` }}
                            >
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
