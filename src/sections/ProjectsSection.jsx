import React, { useEffect, useRef } from 'react';
import './ProjectsSection.css';

const projects = [
    {
        title: 'Multi-view Ensemble Cancer Classification',
        description: 'Developed an advanced machine learning system that aggregates multiple views of data to classify cancer types with higher accuracy. Utilized ensemble methods to improve robustness and predictive performance.',
        tags: ['Python', 'Machine Learning', 'Ensemble Methods']
    },
    {
        title: 'Novel Ensemble Feature Selection',
        description: 'Researched and implemented a novel approach for selecting critical features in high-dimensional gene expression data, significantly reducing dimensionality while maintaining classification accuracy.',
        tags: ['Data Science', 'Feature Selection', 'Research']
    },
    {
        title: 'Microarray Gene Expression Classification',
        description: 'Analyzed complex microarray datasets to identify patterns and classify gene expression levels, aiding in the early detection of genetic anomalies.',
        tags: ['Bioinformatics', 'Python', 'Classification']
    },
    {
        title: 'Calorie Counter Mobile App',
        description: 'Designed and built a user-friendly mobile application for tracking daily calorie intake, featuring a database of foods, progress charts, and personalized goals.',
        tags: ['Android Studio', 'Java/Kotlin', 'UI/UX']
    }
];

const ProjectsSection = () => {
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

        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card) => observer.observe(card));

        return () => {
            projectCards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    return (
        <section className="projects-section" ref={sectionRef}>
            <h2 className="projects-title">Deep Space Expeditions</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span className="project-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
