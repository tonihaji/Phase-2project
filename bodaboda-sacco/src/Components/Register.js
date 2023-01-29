import React, { useState } from 'react';
import Navbar from './Navbar';

function Register() {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
passportNumber: '',
email: '',
ntsaNumber: ''
});

const handleChange = event => {
setFormData({
...formData,
[event.target.name]: event.target.value
});
}

return (
<div>

<div className="d-flex justify-content-center ">
<h3>Register for membership</h3>
</div>

<div className="d-flex justify-content-center ">

<form onSubmit={()=>{}} className="register">
<label>
First Name:
<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
</label>
<br />
<label>
Last Name:
<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
</label>
<br />
<label>
Passport Number:
<input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} />
</label>
<br />
<label>
Email:
<input type="email" name="email" value={formData.email} onChange={handleChange} />
</label>
<br />
<label>
NTSA Number:
<input type="text" name="ntsaNumber" value={formData.ntsaNumber} onChange={handleChange} />
</label>
<br />
<button type="submit" className="bg-secondary">Submit</button>
</form>
</div>
</div>
);
}

export default Register;