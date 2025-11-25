import React, { useState } from 'react';
import axios from 'axios';

function DonateFood() {
  const [foodName, setFoodName] = useState('');
  const [donorName, setDonorName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { foodName, donorName, address, email, phone };
    axios.post('http://localhost:5000/api/donate', newFood)
      .then(response => {
        alert('Food donated successfully');
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Donate Food</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Food Name" onChange={e => setFoodName(e.target.value)} required />
        <input type="text" placeholder="Donor Name" onChange={e => setDonorName(e.target.value)} required />
        <input type="text" placeholder="Address" onChange={e => setAddress(e.target.value)} required />
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} required />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default DonateFood;
