
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
const DeliveryPage = () => {
  return (
    <section>
      <div className="parent">
        <div className="fill11">
          <img className="image1" style={{ width: "100%" }} src="delivery.svg" />
        </div>

        <Link to="/"><img className="image2" src="logo.svg" /></Link>
        <div className="famto"> <h4 style={{ textAlign: "left", fontFamily: "Poppins", marginLeft: "-640px", marginTop: "-267px", fontSize: "20px" }}>
          Welcome to <br />
          <span style={{ fontFamily: "sans-serif", fontSize: "70px", color: "white", letterSpacing: "3px" }}>FAMTO DELIVERY</span><br />
          <p style={{ fontSize: "14px", fontFamily: "Poppins", color: "whitesmoke" }}>Get anything and everything delivered to your doorsteps through FAMTO!
          </p>
        </h4>
          <div className="famto" style={{ marginLeft: "480px", marginTop: "-400px", fontFamily: "Poppins", fontSize: "20px", display: "flex" }}>
            <ul><Link to="/" style={{ color: "white" }}>Home</Link></ul>
            <ul>Delivery</ul>
            <ul><img src="partnerus.svg" />
            </ul>
          </div>
        </div>

      </div><br /><br /><br />
      <section>
        <div>
          <img style={{ width: "90%", marginLeft: "0px" }} src="deliverytext.svg" /><br></br>
        </div><br /><br />
        <div className="delivery-container">
          <img style={{ width: "100%" }} src="orderanything.svg" /><br></br><br />
          <img style={{ width: "100%" }} src="customerorder.svg" /><br></br><br />
          <img style={{ width: "100%" }} src="pickdrop.svg" /><br></br><br />
          <img style={{ width: "100%" }} src="scheduleorder.svg" /><br></br><br />
        </div>
        <br /><br />
        <div style={{ marginLeft: "0px" }}>
          <img style={{ width: "90%" }} src="content.svg" /><br></br>

        </div><br /><br />
        <Footer />
      </section>

    </section>
  );
};
export default DeliveryPage;