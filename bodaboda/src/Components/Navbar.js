import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      
      <nav id="navbar"className="navbar navbar-expand-lg  fixed-top bg-success">
        <div className="container-fluid  ">
          <div>Bodasacco-app</div>
          
          <div className="collapse navbar-collapse  justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-3 px-5 ">
              <Link className="nav-link active " to="/" aria-current="page"><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
              <Link className="nav-link px-4 " to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>cart</Link>
              <Link className="nav-link  px-4 " to="/shop"><i class="fa fa-shopping-cart" aria-hidden="true"></i> shop</Link>
              <Link className="nav-link px-4 " to="/bookrider"><i class="fa fa-users" aria-hidden="true"></i> BookRider</Link>
              
              <Link className="nav-link px-4" to="/remit"><i class="fa fa-credit-card" aria-hidden="true"></i> Remit</Link> 
              {/* <Link className="nav-link px-4" to="/loan"><i class="fa fa-university" aria-hidden="true"></i> Loan</Link> */}
              <Link className="nav-link px-25" to="/sign"><i class="fa fa-user" aria-hidden="true"></i>SignUp</Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
