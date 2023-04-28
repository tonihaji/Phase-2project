import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BookRider() {
  const [riders, setRiders] = useState([]);
  const [search, setSearch] = useState("");
  const [ratings, setRatings] = useState({});
  const [bookedStatus, setBookedStatus] = useState({});

  useEffect(() => {
    fetch("/riders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setRiders(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleRateRider(id, rating) {
    setRatings({
      ...ratings,
      [id]: rating,
    });
  }

  function handleBookRider(id, name) {
    setBookedStatus({
      ...bookedStatus,
      [id]: {
        name,
        rating: ratings[id] || 0,
        status: "booked",
      },
    });

    fetch(`/riders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ riderId: id }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(`Booked rider ${data.riderId}`);
      })
      .catch((error) => {
        console.error("Error booking rider:", error);
      });
  }

  function handleCancelRider(id) {
   
    

    fetch(`/riders/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        document.location.reload()
        console.log(data)
      })
      // .catch((error) => {
      //   console.error("Error cancelling booking:", error);
      // });
  }

  const displayRider = riders
    .filter((rider) => {
      const fullName = `${rider.name} `;
      return search === "" ? rider : fullName.toLowerCase().includes(search.toLowerCase());
    })
    
    .map((rider) => {
      const riderRating = ratings[rider.id] || 0;
      const booking = bookedStatus[rider.id];
      return (
        <div key={rider.id} className="col-md-4 mb-4">
          <div className="card">
            {/* <img src={rider.rider_avatar} className="card-img-top" alt="rider avatar"/> */}
            <img src={`/images/${rider.image}`} alt={rider.name} className="card-img-top" />

            <div className="card-body">
              <h5 className="card-title">{rider.name} </h5>
              <p className="card-text">  model_vehicle: {rider.model_vehicle}</p>
              <div className="d-flex align-items-center">
                <p className="card-text">Your rating:</p>
                <div className="btn-group" role="group" aria-label="Rider rating">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      className={`btn btn-secondary ${riderRating === num ? "active" : ""}`}
                      onClick={() => handleRateRider(rider.id, num)}
                      key={num}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
              <button type="button" className="btn btn-primary">Book Rider</button>
              
<button type="button" className="btn btn-warning m-5" onClick={()=>{handleCancelRider(rider.id)}}>Cancel Rider</button>

            </div>
          </div>
        </div>
      );
    });
  
  return (
    <>
      <div>
        <div style={{marginTop: "3%"}}>
          <h3 style={{color: "secondary mt-5"}}>Book transport </h3>
        </div>
        <div className="container-fluid" style={{marginTop: "2%"}}>
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input onChange={handleChange} className="form-control me-2" type="search" placeholder="Enter name" aria-label="Search"/>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {displayRider}
        </div>
      </div>
    </>
  );
}

export default BookRider;
