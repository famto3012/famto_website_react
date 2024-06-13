import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name:  '', 
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
    <div className="contact-form-container" width="1900 px">
    <h2 style={{textAlign:"center"}}>How can we help you?</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <input type="text" 
        value="Name"
        className="form-control" 
        id="name"
        name="name" 
        onChange={handleChange}
        required
        />
      </div>
      <div className="form-group">
        <input type="email"
          value="Email"
          className="form-control"
          id="email"
          name="email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value="Phone Number"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input type="text"
          className="form-control"
          id="subject"
          name="subject"
          value="Subject"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          id="message"
          name="message"
          value="Message or Feedback"
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
