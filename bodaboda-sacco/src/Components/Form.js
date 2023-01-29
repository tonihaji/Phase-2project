import React, { useState } from "react";
import Footer from "./Footer";

function Form ({newPost}) {
    const [getLoan, setGetLoan]= useState ({
        date:"",
        first_name: "",
        last_name: "",
        email: "",
        location: "",
        amount: ""
    })

    function handleSubmit (e) {
        e.preventDefault ()
        fetch ("http://localhost:3000/loan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify (getLoan)
        })
            .then ((r)=> r.json ())
            .then ((data)=> newPost(data))
        
            alert ("Your loan is being reviewed, we will get back to you soon")
    }

    function handleChange (e) {
        const key = e.target.name
        const value = e.target.value
        setGetLoan ({...getLoan, [key]: value})
    }

    console.log(getLoan);

    const style = {borderRadius: "30px", width: "400px", height: "40px", borderStyle: "double"}
    return (
        <div>
            <div style={{marginTop: "1%"}}>
                <h5>Fill the form below to apply for a loan</h5>
            </div>
            <div style={{marginTop: "1%"}}>
            <form onSubmit={handleSubmit}>
            <label>First name</label><br/>
                <input onChange={handleChange} name="date" style={style} type="date" placeholder="Enter date"/><br/>
                <input onChange={handleChange} name="first_name" style={style} type="text" placeholder="Enter your legal first name"/><br/>
                <label>Last name</label><br/>
                <input onChange={handleChange} name="last_name" style={style} type="text" placeholder="Enter your legal last name"/><br/>
                <label>Email address</label><br/>
                <input onChange={handleChange} name="email" style={style} type="text" placeholder="Enter a valid email address"/><br/>
                <label>Gender</label><br/>
                <select onChange={handleChange} name="gender" style={{borderRadius: "30px", height: "40px", width: "200px"}}>
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Binary</option>
                    <option>Would rather not say</option>
                </select><br/>
                <label>Age</label><br/>
                <input onChange={handleChange} name="age" style={style} type="number" placeholder="Enter your age"/><br/>
                <label>Current location</label><br/>
                <input onChange={handleChange} name="location" style={style} type="text" placeholder="Enter your current location"/><br/>
                <label>Loan</label><br/>
                <input onChange={handleChange} name="amount" style={style} type="number" placeholder="Enter amount of loan you hope to secure"/><br/><br/>
                <button onClick={handleSubmit} style={{backgroundColor: "black", boxShadow: "5px 10px 18px red", width: "150px", color: "whitesmoke", borderRadius: "30px"}}>Submit</button><br/>
            </form><br/><br/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Form
