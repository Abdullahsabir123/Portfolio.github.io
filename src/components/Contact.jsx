import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_z2g7x53', // Replace with your EmailJS service ID
      'template_v2jnvkj', // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'WYbUlC2jkP0I6nxGf' // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log("Email sent successfully!", result.text);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Clear form fields after sending
    })
    .catch((error) => {
      console.error("Email sending error:", error);
      alert("An error occurred, please try again.");
    });
  };

  return (
    <section className="contact fade-in">
      <h1>Contact Me</h1>
      
      {/* Icons Section */}
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/%C3%A1bdullah-sabir-2b0412328" className="contact-icon icon-1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Abdullahsabir123" className="contact-icon icon-2" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://wa.me/+923322737818" className="contact-icon icon-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>

      {/* Form Section */}
      <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
          />
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
