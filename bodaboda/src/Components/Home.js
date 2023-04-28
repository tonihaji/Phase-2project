import React from "react";
import Footer from "./Footer";
import Sign from "./Sign";

function Home() {
  return (
    <div id="test">
      <div className="card text-bg-dark">
        {/* <img
          src="https://images.unsplash.com/photo-1603743138526-d3bf32966c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          className="card-img"
          alt="..."
          style={{ height: "750px" }}
        /> */}
        <div className="card-img-overlay" style={{ paddingTop: "100px" }}>
          <h3 className="card-title">
            Join the future of the boda boda industry
          </h3>
          <h5 className="card-text">
            Bodaboda operators(Motorcycle taxi) who are destined to change their
            lives through coming together and addressing different problems
            affecting their en-devours.
          </h5>
          <h5 className="card-text">
            <small>Last updated 3 mins ago</small>
          </h5>
        </div>
      </div>
      <div>
        <Sign />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
