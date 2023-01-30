import React, { useState } from "react";
import Navbar from "./Navbar";

function Loans({ addData }) {
    const [entries, setEntries] = useState({
    date: "",
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    amount: "",
    
    });
    
    function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setEntries({ ...entries, [key]: value });
    }
    
    function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/loan", {
    method: "POST",
    headers: {
    "Content-type": "application/json",
    },
    body: JSON.stringify(entries),
    })
    .then((r) => r.json())
    .then((data) => addData(data));
    
    }
    

    return(
        <div className="h-100 mt-5  ">
        
        <form  onSubmit={handleSubmit}className=" p-3 ">
            <div className="col-3">
            <label>Date:</label>
            
                <input  onChange={handleChange}
                       name="date" className="form-control form-control-sm" type="date" placeholder="Date" aria-label=".form-control-sm example"/>
            </div>
            <br/>
            <div className="col-3">
            <label>First Name:</label>
                <input onChange={handleChange}
                      name="name" className="form-control form-control-sm" type="text" placeholder="Firstname" aria-label=".form-control-sm example"id="firstname"/>
                      
            </div>
            <br/>
            <div className="col-3">
            <label>Last Name:</label>
                <input onChange={handleChange}
                      name="name" className="form-control form-control-sm" type="text" placeholder="lastname" aria-label=".form-control-sm example"id="lastname"/>
            </div>
            <br/>
            <div className="col-3">
            <label>Email:</label>
                <input onChange={handleChange}
                        name="email" className="form-control form-control-sm" type="email" placeholder="Email" aria-label=".form-control-sm example"/>
            </div>
            <br/>
            <div className="col-3">
            <label>Adress:</label>
                <input onChange={handleChange}
                      name="loc" className="form-control form-control-sm" type="text" placeholder="Location" aria-label=".form-control-sm example"id="adress"/>
            </div>
            <br/>
            <div className="col-3">
            <label>Amount:</label>
                <input onChange={handleChange}
                        name="amount" className="form-control form-control-sm" type="number" placeholder="Amount" aria-label=".form-control-sm example"/>
            </div>
            <br/>
              </form>
                 <button onClick={handleSubmit} type="button" className="btn btn-secondary btn-lg mb-4" style={{}}>Request</button> 
                 

        </div>
    )
}
export default Loans;
