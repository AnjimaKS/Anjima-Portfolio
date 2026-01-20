import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <h2 className="contact-title">Establish Contact</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Transmission Channels</h3>
                    <div className="contact-detail">
                        <span className="contact-icon">📧</span>
                        <span>anjimaks@example.com</span>
                    </div>
                    <div className="contact-detail">
                        <span className="contact-icon">📱</span>
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="contact-detail">
                        <span className="contact-icon">📍</span>
                        <span>Kerala, India</span>
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-link" title="LinkedIn">LinkedIn</a>
                        <a href="#" className="social-link" title="GitHub">GitHub</a>
                        <a href="#" className="social-link" title="Twitter">Twitter</a>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h3>Send Signal</h3>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" className="form-input" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" className="form-input" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" className="form-textarea"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Launch Message</button>
                    </form>
                </div>
            </div>
            <p className="footer-text">© 2024 Anjima KS. Exploring the Digital Universe.</p>
        </section>
    );
};

export default ContactSection;
