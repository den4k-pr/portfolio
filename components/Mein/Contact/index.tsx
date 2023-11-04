'use client';

import { useState } from 'react';
import contact from './Contact.module.scss';
import emailjs from 'emailjs-com';
import { LayoutAnimationSkroll } from '../../Layout/LayoutAnimationSkroll';

interface ContactTranslation {
  contactTitle: string;
  contactSpan: string;
  contactFormName: string;
  contactFormLastName: string;
  contactFormMobile: string;
  contactFormEmail: string;
  contactFormMessage: string;
  contactFormButton: string;
  contactFormSuccess: string;
  contactFormError: string;
}

export const Contact = ({
  contactTitle,
  contactSpan,
  contactFormName,
  contactFormLastName,
  contactFormMobile,
  contactFormEmail,
  contactFormMessage,
  contactFormButton,
  contactFormSuccess,
  contactFormError,
}: ContactTranslation) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaccess, setIsSaccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const templateParams = {
      name: name,
      lastName: lastName,
      email: email,
      tel: tel,
      message: message,
    };

    try {
      await emailjs.send(
        'service_ugc7dcw',
        'template_2ueaqn1',
        templateParams,
        'B3uHEg9VYxDRxtTJq',
      );
      console.log('Email sent successfully!');
      setIsSaccess(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }

    setIsSubmitting(false);

    // Очистити поля форми після відправлення
    setTimeout(() => {
      setIsSaccess(false);
    }, 3000);

    setName('');
    setLastName('');
    setEmail('');
    setTel('');
    setMessage('');
  };

  return (
    <section id="contact" className={contact.contact}>
      <div className="container">
        <h2 className="title">
          {contactTitle} <span style={{ display: 'initial' }}>{contactSpan}</span>
        </h2>
        <LayoutAnimationSkroll className="" transform="translateY(70px)">
          <form onSubmit={handleSubmit} action="">
            <input
              placeholder={contactFormName}
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <input
              placeholder={contactFormLastName}
              type="text"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
            <input
              placeholder={contactFormMobile}
              type="tel"
              name="tel"
              onChange={(e) => setTel(e.target.value)}
              value={tel}
              required
            />
            <input
              placeholder={contactFormEmail}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <textarea
              placeholder={contactFormMessage}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
            <button
              className={`${isSubmitting == true ? 'send' : 'button'}`}
              type="submit"
              disabled={isSubmitting}>
              {isSubmitting ? '' : contactFormButton}
            </button>
          </form>
        </LayoutAnimationSkroll>
        {isSaccess && <p className="message">{contactFormSuccess}</p>}
        {isError && <p className="messageErr">{contactFormError}</p>}
      </div>
    </section>
  );
};
