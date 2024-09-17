import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    dateOfBirth: '',
    gender: ''
  });

  const [qrCodeData, setQrCodeData] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, dateOfBirth } = formData;

    if (!name || !surname || !dateOfBirth) {
      alert("Please fill out all fields.");
      return;
    }

    const data = `${name} ${surname} - ${dateOfBirth}`;
    setQrCodeData(data);
  };

  const { name, surname, dateOfBirth, gender } = formData;

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name} 
            onChange={handleChange} 
            required 
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="surname">Surname:</label>
          <input 
            type="text" 
            id="surname" 
            name="surname" 
            value={surname} 
            onChange={handleChange} 
            required 
            placeholder="Enter your surname"
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input 
            type="date" 
            id="dateOfBirth" 
            name="dateOfBirth" 
            value={dateOfBirth} 
            onChange={handleChange} 
            required 
          />
        </div>

        <>
          <legend>Gender:</legend>
          <div>
            <input 
              type="radio" 
              id="male" 
              name="gender" 
              value="male" 
              checked={gender === 'male'} 
              onChange={handleChange} 
              required 
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="female" 
              name="gender" 
              value="female" 
              checked={gender === 'female'} 
              onChange={handleChange} 
              required 
            />
            <label htmlFor="female">Female</label>
          </div>
        </>

        <button type="submit">Submit</button>
      </form>

      {qrCodeData && (
        <QRCodeSection data={qrCodeData} />
      )}
    </section>
  );
};

const QRCodeSection = ({ data }) => {
  return (
    <div>
      <h3>QR Code:</h3>
      <QRCode value={data} />
    </div>
  );
};

export default Form;
