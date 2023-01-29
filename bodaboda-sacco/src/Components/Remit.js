import React, { useState } from 'react';
import Navbar from './Navbar';
 // import custom CSS stylesheet

const Remit = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [memberId, setMemberId] = useState('');
const [amount, setAmount] = useState('');
const [balance, setBalance] = useState(0);

const handleSubmit = event => {
event.preventDefault();
// Send remittance data to API or handle submission in some other way
setBalance(balance + amount);
};

return (
    
<div className="container text-center  mt-5 col-4">
    <h3 className='p-5'>remet your membership fund:</h3>
<form>
  
  <div className="form-group ">
    
                            <label htmlFor="name">Firstname:</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="name">Lastname:</label>
                            <input type="text" className="form-control" id="name" />
                        </div><div className="form-group">
                            <label htmlFor="name">Membership-no:</label>
                            <input type="text" className="form-control" id="name" />
                        </div><div className="form-group">
                            <label htmlFor="number">Amount</label>
                            <input type="numer" value={amount} onChange={event=>setAmount(event.target.value)} className="form-control" id="name" />
                        </div>
                        
  
  <button type="submit" class="btn btn-primary p-3">remit</button>
</form>
</div>
);
};

export default Remit;
