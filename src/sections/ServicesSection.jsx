import React, { useEffect, useRef } from 'react';
import './ServicesSection.css';

const services = [
    { name: 'Web Development', icon: '💻' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'ML Model Development', icon: '🤖' },
    { name: 'Algorithm Visualization', icon: '📊' },
    { name: 'WordPress Creation', icon: '📝' },
];

const ServicesSection = () => {
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

        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    return (
        <section className="services-section" ref={sectionRef}>
            <h2 className="services-title">Galactic Services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div
                        className="service-card"
                        key={index}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="service-ring">
                            <div className="service-orbiter" style={{ animationDelay: `-${index}s` }}></div>
                        </div>
                        <span className="service-icon">{service.icon}</span>
                        <h3 className="service-name">{service.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
