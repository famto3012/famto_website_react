import { Row, Col } from "antd";
import React from "react";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import ContactForm from "../contactform/ContactForm";

const Contact = () => {

    return (

        <section style={{ backgroundColor: "white" }}>
            <div className="parent">
                <div className="fill6" >
                    <img className="image1" style={{ width: "100%", opacity: "100%" }} src="contact.svg"></img></div>
                <Link to="/"> <img class="image2" src="logo.svg" /></Link>
                <div className="famto" style={{ color: "white", top: "37%", fontFamily: "Poppins", fontSize: "20px" }}>Contact Us</div>
                <div><br></br>
                    <Row>
                        <Col span={8} style={{ color: "black", textAlign: "left", marginLeft: "10px" }}>
                            <h1 style={{ color: "black", marginLeft: "50px" }}>Contact</h1>
                            <ul style={{ height: "50px" }}>
                                <img src="mail.svg" /><br></br>
                                <br /><img src="phone.svg" /><br></br>
                                <br /><img src="location.svg" /><br></br>
                            </ul>
                        </Col>
                        <Col span={15}>
                            <br /><br /><ContactForm />
                        </Col>
                    </Row>
                </div><br></br>
            </div><br></br>
            <Footer />
        </section>
    );
};

export default Contact;