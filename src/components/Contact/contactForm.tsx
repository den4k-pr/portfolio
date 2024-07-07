import React from 'react';
import { Link } from "react-router-dom";
import { FormPreloader } from "./formPreloader";
import { useContactForm } from '../../hooks/useContactForm';

export const ContactForm = () => {
    const {
        formData,
        loading,
        success,
        error,
        formRef,
        formType,
        handleInputChange,
        handleSubmitForm,
        location
    } = useContactForm();

    return (
        <div className={`contact ${formType === "contact" ? "contactActive" : ""}`}>
            <div className="contact-wrapper" ref={formRef}>
                <Link to={location.pathname} className="closeForm"></Link>
                <h3 className="contactForm-title">Write me</h3>
                {loading ? 
                <FormPreloader />
                :
                <form className="contactForm" onSubmit={handleSubmitForm}>
                    <input
                        className="contactForm-text"
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName || ""}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className="contactForm-text"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email || ""}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        className="contactForm-message"
                        name="message"
                        placeholder="Good day, I want to ask..."
                        value={formData.message || ""}
                        onChange={handleInputChange}
                        required
                    />
                    <button className="contactForm-send" type="submit">Send</button>
                </form>}
                {success && <p className="successMessage">The message has been successfully sent, please wait for an {formData.email}</p>}
                {error && <p className="errorMessage">An error occurred, try again later</p>}
            </div>
        </div>
    );
};
