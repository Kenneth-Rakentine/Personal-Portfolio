import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    try {
      const response = await axios.post("http://localhost:5000/contact", details, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      setStatus("Submit");
      alert(response.data.status);
    } catch (error) {
      setStatus("Submit");
      console.error(error);
      alert("Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message" className='msgLabel'>Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;