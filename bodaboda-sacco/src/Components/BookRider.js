import React, { useState, useEffect } from "react";

function BookRider () {
    const [rider, setRider]= useState([])
    const [search, setSearch]= useState ([])

    useEffect (()=> {
        fetch ("http://localhost:3000/Rider")
            .then ((r)=> r.json())
            .then ((data)=> setRider(data))
    }, [])
    
    function handleSubmit (e) {
        e.preventDefault()
    }

    function handleChange (e) {
        setSearch (e.target.value)
    }

    const displayRider = rider.filter ((ride)=> {
        return search === '' ? ride : ride.ip_address.includes (search)
    }).map ((bookride)=> {
        return <tr key={bookride.id}>
                    <td><img src={bookride.rider_avatar} alt="rider avatar"/></td>
                    <td>{bookride.first_name}</td>
                    <td>{bookride.last_name}</td>
                    <td>{bookride.vehicle_model}</td>
                    <td>{bookride.ip_address}</td>
               </tr>
    })

    return (
        <>
        <div>
            <div style={{marginTop: "3%"}}>
                <h3 style={{color: "secondary mt-5"}}>Book transport services with our most trusted boda boda riders</h3>
            </div>
            <div className="container-fluid" style={{marginTop: "2%"}}>
                    <form onSubmit={handleSubmit} className="d-flex" role="search">
                        <input onChange={handleChange} className="form-control me-2" type="search" placeholder="Enter your IP address to search for a rider near you" aria-label="Search"/>
                    </form>
                </div>
        </div>
        <div style={{marginTop: "2%"}}>
            <table className= "table table-striped table-hover">
            <thead>
                <tr>
                    <th>Rider</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Vehicle model</th>
                    <th>IP address</th>
                </tr>
            </thead>
            <tbody>
                {displayRider}
            </tbody>
        </table>
        </div>
        </>
    )

}

export default BookRider