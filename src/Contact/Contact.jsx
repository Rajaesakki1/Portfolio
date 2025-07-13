import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_gnhuv8l',
      'template_ehec2oo',
      form.current,
      'k58Sfxtw3NacDjY60'  // Replace with your real public key
    ).then(
      () => {
        setStatus('✅ Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error(error);
        setStatus('❌ Failed to send message. Try again.');
      }
    );
  };

  return (
    <section  id="Contact" className="contact">
      <section id = "Contact with me">
        <h2 className="contact-title">💌 Contact Me</h2>

      <div className="contact-box">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="subject" placeholder="Subject" required />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </section>
      </section>
      
  );
};

export default Contact;