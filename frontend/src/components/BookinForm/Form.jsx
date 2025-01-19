import React, { useState } from 'react';
import axios from 'axios';
import styles from './Form.module.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    destinationId: '',
    name: '',
    numberOfPersons: 1,
    contactNumber: '',
    email: '',
    arrivalDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Booking successful!');
      setFormData({
        destinationId: '',
        name: '',
        numberOfPersons: 1,
        contactNumber: '',
        email: '',
        arrivalDate: '',
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  return (
    <div className={styles.formContainer}>  {/* Apply scoped class from CSS module */}
      <h2 className={styles.formHeading}>Book Your Trip</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="destinationId">Destination ID</label>
          <input
            type="text"
            id="destinationId"
            name="destinationId"
            placeholder="Enter Destination ID"
            value={formData.destinationId}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="numberOfPersons">Number of Persons</label>
          <input
            type="number"
            id="numberOfPersons"
            name="numberOfPersons"
            min="1"
            placeholder="Number of people"
            value={formData.numberOfPersons}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter your contact number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="arrivalDate">Arrival Date</label>
          <input
            type="date"
            id="arrivalDate"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>Book Now</button>
      </form>
    </div>
  );
};

export default Form;
