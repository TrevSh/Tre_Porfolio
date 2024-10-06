// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (e.g., EmailJS or backend handling)
    console.log('Form submitted', formData);
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            style={inputStyle} 
            required 
          />
        </label>

        <label style={labelStyle}>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            style={inputStyle} 
            required 
          />
        </label>

        <label style={labelStyle}>
          Message:
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            style={{ ...inputStyle, height: '100px' }} 
            required 
          />
        </label>

        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

// Styling inspired by Refactoring UI
const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '2rem',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const labelStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem'
};

const inputStyle = {
  padding: '0.75rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginBottom: '1rem',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
};

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
};

export default Contact;
