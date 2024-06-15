import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section>
      <div className="contact-form-container" width="1600 px">
        <h2 style={{ textAlign: "justify", marginLeft: "30px" }}>How can we help you?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text"
              placeholder='Name'
              value={formData.name}
              className="form-control"
              id="name"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input type="email"
              placeholder='Email'
              value={formData.email}
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input type="tel"
              placeholder='PhoneNumber'
              value={formData.phone}
              className="form-control"
              id="phone"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input type="text"
              placeholder='Subject'
              value={formData.subject}
              className="form-control"
              id="subject"
              name="subject"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Message or Feedback"
              value={formData.message}
              id="message"
              name="message"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
