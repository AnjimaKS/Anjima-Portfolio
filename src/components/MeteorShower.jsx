import React, { useEffect, useState } from 'react';
import './MeteorShower.css';

const MeteorShower = () => {
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const style = {
                top: Math.random() * 100 + 'vh',
                left: Math.random() * 100 + 'vw',
                animation: `meteor-fly ${Math.random() * 2 + 1}s linear forwards`,
            };
            setMeteors((prev) => [...prev, { id, style }]);

            // Cleanup meteor after animation
            setTimeout(() => {
                setMeteors((prev) => prev.filter((m) => m.id !== id));
            }, 3000);
        }, 4000); // 1 meteor every 4 seconds roughly

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="meteor-shower">
            {meteors.map((m) => (
                <div key={m.id} className="meteor" style={m.style}></div>
            ))}
        </div>
    );
};

export default MeteorShower;
