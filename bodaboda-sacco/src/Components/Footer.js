import React from "react";

function Footer () {
    return (
        <div>
            <div className="card fixed-bottom">
            <div className="card-body">
                <span style={{paddingRight:"60px", fontSize: "30px"}}>Follow us on:</span>
                <span style={{paddingRight:"80px", fontSize: "30px"}}><i class="fa fa-facebook-square" aria-hidden="true"></i></span>
                <span  style={{paddingRight:"80px", fontSize: "30px"}}><i class='bx bxl-whatsapp-square' ></i></span>
                <span style={{paddingRight:"80px", fontSize: "30px"}}><i class='bx bxl-instagram' ></i></span>
                <span style={{paddingRight:"80px", fontSize: "30px"}}><i class='bx bxl-linkedin-square' ></i></span>
                <span style={{paddingRight:"80px", fontSize: "30px"}}><i class='bx bxl-twitter'></i></span>
            </div>
            </div>
        </div>
    )
}

export default Footer;
