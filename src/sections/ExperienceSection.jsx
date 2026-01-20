import React, { useEffect, useRef } from 'react';
import './ExperienceSection.css';

const experiences = [
    {
        role: 'Web Developer',
        org: 'Virtual Lab (Algorithm Visualization)',
        date: 'Present',
        desc: 'Developing interactive algorithm visualizations to enhance learning experiences.'
    },
    {
        role: 'Web Developer & UI/UX Designer',
        org: 'Digital Marketing Agency',
        date: '2023 - Present',
        desc: 'Designing and building responsive websites with a focus on user experience and conversion based design.'
    },
    {
        role: 'Academic Mentor',
        org: 'Kalvium',
        date: '2022 - 2023',
        desc: 'Mentored students in full-stack development and computer science fundamentals.'
    },
    {
        role: 'MCA (AI & Data Science)',
        org: 'Amrita Vishwa Vidyapeetham',
        date: '2022 - 2024',
        desc: 'Specialized in Artificial Intelligence and Data Science strategies.'
    },
    {
        role: 'BCA',
        org: 'Amrita Vishwa Vidyapeetham',
        date: '2019 - 2022',
        desc: 'Bachelor of Computer Applications.'
    }
];

const ExperienceSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = document.querySelectorAll('.timeline-item');
        items.forEach((item) => observer.observe(item));

        return () => {
            items.forEach((item) => observer.unobserve(item));
        };
    }, []);

    return (
        <section className="experience-section" ref={sectionRef}>
            <h2 className="experience-title">Cosmic Journey</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <span className="timeline-date">{exp.date}</span>
                            <h3 className="timeline-role">{exp.role}</h3>
                            <h4 className="timeline-org">{exp.org}</h4>
                            <p className="timeline-desc">{exp.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
