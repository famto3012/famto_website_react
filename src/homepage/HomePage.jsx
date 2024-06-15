import { Row, Col } from "antd";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const sliderVariants = {
  initial: {
    transform: "translateX(0%)", // Start at 0% (original position)
  },
  animate: {
    transform: "translateX(-100%)", // Move images to the left by 100%
    transition: {
      from: "translateX(100%)", // Start transition from 100% (right side)
      to: "translateX(-100%)", // End transition at -100% (left side)
      repeat: Infinity, // Repeat indefinitely
      duration: 20, // Adjust the duration as needed
      ease: "linear",
    },
  },
};

const HomePage = () => {
  const clients = [
    "anim1.svg",
    "anim2.svg",
    "anim3.svg",
    "anim4.svg",
    "anim5.svg",
    "anim6.svg",
    "anim7.svg",
    "anim8.svg",
    "anim9.svg",
    "anim10.svg",
  ];

  return (
    <section style={{ width: "100vw", maxWidth: "100vw" }}>
      <div className="parent" style={{ width: "100vw" }}>
        <div className="fill5" style={{ width: "100vw" }}>
          <img
            className="image1"
            style={{ width: "100vw", fill: "000000" }}
            src="homepage.svg"
          />
        </div>
        <Link to="/">
          <img className="image2" src="logo.svg" />
        </Link>
        <div
          className="famto"
          style={{
            marginLeft: "450px",
            marginTop: "-400px",
            fontFamily: "Poppins",
            fontSize: "20px",
            display: "flex",
          }}
        >
          <ul>Home</ul>
          <ul>
            <Link to="/delivery" style={{ color: "white" }}>
              Delivery
            </Link>
          </ul>
          <ul>
            <img src="partnerWithUs.svg" />
          </ul>
        </div>
      </div>

      <div style={{ width: "90vw" }}>
        <br />
        <Row style={{ width: "100vw" }}>
          <Col span={11} style={{ marginTop: "130px" }}>
            <img src="welcome.svg" />
          </Col>
          <Col span={12}>
            <ul style={{ marginTop: "50px", marginLeft: "-10px" }}>
              <img src="homeText.svg" />
            </ul>
            <br />
            <ul style={{ marginLeft: "-60%" }}>
              <img src="learn1.svg" />
            </ul>
          </Col>
        </Row>
        <img src="line.svg" />
        <div
          style={{
            width: "90vw",
            marginLeft: "30px",
            marginTop: "60px",
            marginBottom: "40px",
          }}
        >
          <ul
            style={{ fontWeight: "bold", fontSize: "20px", textAlign: "left" }}
          >
            Our Services
          </ul>
          <Row style={{ marginTop: "40px", width: "90vw" }}>
            <ul>
              <img src="deliveryHover1.svg" />
            </ul>
            <ul>
              <img src="taxiBooking1.svg" />
            </ul>
            <ul>
              <img src="onlineConsultation1.svg" />
            </ul>
            <ul>
              <img src="handymanServices1.svg" />
            </ul>
          </Row>
        </div>
        <br />
        <div style={{ width: "100vw" }}>
          <img style={{ width: "100vw" }} src="appScreen.svg" />
        </div>
        <div className="parent" style={{ width: "100vw" }}>
          <img
            className="image1"
            style={{ width: "100vw", marginTop: "-59px" }}
            src="handShake.svg"
          />
        </div>
        <br />
        <div style={{ width: "100vw", overflowX: "hidden" }}>
          <h2
            style={{ textAlign: "left", fontSize: "20px", marginLeft: "30px" }}
          >
            Our Esteemed Clients
          </h2>
          <motion.div
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            style={{
              display: "flex",
              width: "100%",
              overflow: "hidden",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <li key={index} style={{ display: "inline-block" }}>
                <img src={client} />
              </li>
            ))}
          </motion.div>
        </div>
      </div>
      <br />

      <Footer />
    </section>
  );
};

export default HomePage;
