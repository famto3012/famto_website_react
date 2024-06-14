import React from "react";
import { Row, Col, Divider } from "antd";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";



const AboutUs = () => {

    return (
        <section style={{ width: "100vw" }}>
            <div class="parent">
                <div className="fill5" style={{width:"100vw"}}>
                    <img class="image1" style={{ width: "100vw", fill: "000000" }} src="about.svg" /></div>
                <Link to="/home"><img class="image2" src="logo.svg" /></Link>
                <div className="famto" style={{ fontFamily: "Poppins", fontSize: "20px" }}>About Famto</div>

            </div>




            <section style={{ marginTop: "-7px",marginLeft:"40px",marginRight:"30px", height: "750px", backgroundColor: "white", color: "black", padding: "50px" }}>
                <header>



                    <br></br></header>
                <div className="content"></div>
                <p style={{ textAlign: "justify", fontFamily: "Poppins" }}>The Company got its corporate character in July 2021 under the name “MY FAMTO Private Limited” and began its journey in Kerala on July 2021 for covering services like Delivery(Food, Grocery, Fruits & Vegetables, Dairy Products, Raw Meat & Fish, Stationary, Bakery, Flowers etc), Taxi, Online Consultancy and Handyman. We are pioneers in online delivery services and maintain good hygiene in the process of delivery for customer satisfaction. In addition to the delivery we provide other services which can ease in for customers as well as merchants.</p>
                <div style={{ backgroundColor: "white" }}><br></br>
                    <Row style={{ padding: "55px", backgroundColor: "rgb(229 248 252)" }}>
                        <Col span={10} style={{ color: "black" }}>
                            <h3 style={{ textAlign: "left", fontFamily: "Poppins" }}>Vision</h3>
                            <p style={{ textAlign: "justify", fontFamily: "Poppins" }}>Our vision is to transform the way people access essential services, creating a premier platform that seamlessly connects individuals, enriches lives, and builds strong community connections.</p>

                        </Col>
                        <Col span={1}>
                            <Divider type="vertical" style={{ borderWidth: 1, borderStyle: 'dotted', color: 'black', height: "100%" }} />
                        </Col>
                        <Col span={13} style={{ color: "black" }}>
                            <h3 style={{ textAlign: "left", fontFamily: "Poppins" }}>Mission</h3>
                            <p style={{ textAlign: "justify", fontFamily: "Poppins" }}>Our mission is to simplify lives by offering a customer-centric platform that provides convenient access to essential services. We empower individuals to cultivate meaningful connections and revolutionize their engagement with services in the digital era.</p>
                            {/* <Col span={10} style={{color:"black"}}>Mission</Col> */}
                        </Col>
                    </Row>
                </div>
                <Row >
                    <Col span={12}>
                        <Row>
                        <Col span={24} style={{ textAlign: "left", width: "70%", fontFamily: "Poppins" }}>
                           <br/> <h2 style={{fontWeight:"bold",fontFamily:"Poppins"}}>
                                Quality Policy
                            </h2>
                            
                            </Col>
                            </Row>
                            {/* <ul style={{ textAlign: "left" }}> */}
                                <Row style={{ textAlign: "left" ,lineHeight:"30px"}}>
                                    <Col span={11} style={{ textAlign: "left" ,marginLeft:"-37px"}}>
                                        <ul style={{ fontFamily: "Poppins" }}>Time Management</ul>
                                        <ul style={{ fontFamily: "Poppins" }}>Honesty and Integrity</ul>
                                        <ul style={{ fontFamily: "Poppins" }}>Monitoring and Reviewing</ul>
                                        <ul style={{ fontFamily: "Poppins" }}>Best in Class Quality of Service</ul>
                                        <ul style={{ fontFamily: "Poppins" }}>Total Customer Satisfaction</ul>
                                    </Col>
                                    <Col span={13}>
                                        <ul style={{ fontFamily: "Poppins" }}>Continuous Improvement</ul>
                                        <ul style={{ fontFamily: "Poppins" }}>Assurance of Timely Delivery</ul>
                                        <ul style={{ fontFamily: "Poppins" }}>Promotion and Training</ul>
                                        <ul style={{ fontFamily: "Poppins" }}>Best in Technology Solution</ul>
                                        <ul style={{ fontFamily: "Poppins" }}>Maintaining Environment, Health & Safety Procedures</ul>
                                    </Col>
                                </Row>
                            {/* </ul> */}
                        {/* </Col> */}
                    </Col>

                    <Col span={12}><img style={{ marginLeft: "230px", marginTop: "80px" }} src="about1.svg" /></Col>
                </Row>


            </section>
            <Footer />
        </section>

    );
};



export default AboutUs;