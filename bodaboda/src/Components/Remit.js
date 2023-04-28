import React, { useState } from 'react';

const Remit = () => {
  const [name, setName] = useState('');
  const [membershipNo, setMembershipNo] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [balance, setBalance] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Prepare remittance data object
    const remittanceData = {
      date: date,
      name: name,
      membership_No: membershipNo,
      amount: amount,
    };

    // Send remittance data to API or handle submission in some other way
    fetch('http://localhost:3000/remit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(remittanceData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setBalance(balance + amount); // Update balance in state
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
    // Clear form inputs
    setName('');
    setMembershipNo('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="container text-center mt-5 col-4">
      <h3 className='p-5'>Remit your membership fund:</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="membershipNo">Membership Number:</label>
          <input type="text" value={membershipNo} onChange={(event) => setMembershipNo(event.target.value)} className="form-control" id="membership_No" />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} className="form-control" id="amount" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="text" value={date} onChange={(event) => setDate(event.target.value)} className="form-control" id="date" />
        </div>
        <button type="submit" className="btn btn-primary p-3">Remit</button>
      </form>
    </div>
  );
};

export default Remit;
