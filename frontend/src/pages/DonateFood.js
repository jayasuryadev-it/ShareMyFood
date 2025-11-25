import React, { useState } from 'react';
import axios from 'axios';

function DonateFood() {
  const [foodName, setFoodName] = useState('');
  const [donorName, setDonorName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFood = { foodName, donorName, address, email, phone };
    console.log("Submitting Food Donation:", newFood); // Debugging log

    try {
      const response = await axios.post('http://localhost:5000/api/donate', newFood);
      console.log("Response from Server:", response.data); // Debugging log
      alert('Food donated successfully');
      window.location.href = "/";
    } catch (error) {
      console.error("Error from Server:", error);
      alert('Failed to donate food. Please try again.');
    }
  };

  return (
    <div>
      <h2>Donate Food</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <input type="text" className="form-control mb-2" placeholder="Food Name" value={foodName} onChange={e => setFoodName(e.target.value)} required />
        <input type="text" className="form-control mb-2" placeholder="Donor Name" value={donorName} onChange={e => setDonorName(e.target.value)} required />
        <input type="text" className="form-control mb-2" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required />
        <input type="email" className="form-control mb-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="text" className="form-control mb-2" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required />
        <button type="submit" className="btn btn-success">Donate</button>
      </form>
    </div>
  );
}

export default DonateFood;
