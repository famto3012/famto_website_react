import React from "react";
const HomePage = () => {

    return(
        <section >
          <div className="parent">
            <div  className="fill4">
            <img style={{marginTop:"-305px", width:"1540px"}} className="image1" src="homepage.svg"></img></div>
            <img style={{marginLeft:"40%", marginTop:"-7.5%"}} className="image2" src="logo.svg"></img>
            <div ><Col>Home</Col>
            <Col>Delivery</Col>
            {/* <Col><img src="partner.svg"/></Col> */}
            </div>
          </div>
          <div>
            
          </div>
        </section>

        );

};

export default HomePage;