import { Row, Col } from "antd";
import React from "react";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {

    return (

        <section style={{backgroundColor:"white"}}>
            <div className="parent">
                <div  className="fill6" >
                <img className="image1" style={{width:"100%",opacity:"100%"}} src="contact.svg"></img></div>
                <Link to="/home"> <img class="image2" src="logo.svg" /></Link>
                <div className="famto" style={{color:"white",top:"42%",fontFamily:"Poppins",fontSize:"20px"}}>Contact Us</div>
                <div><br></br>
                    <Row>
               <Col span={10} style={{color:"black",textAlign:"left",marginLeft:"10px"}}>
               <h1 style={{color:"black",marginLeft:"50px"}}>Contact</h1>
               <ul style={{height:"50px"}}>
                <img src="mail.svg"/><br></br>
                <br/><img src="phone.svg"/><br></br>
                <br/><img src="location.svg"/><br></br>
               </ul>
               </Col>
               <Col className="parent" span={11} style={{color:"black",textAlign:"left"}}>
               <h2 className="image2" style={{color:"black"}}>How can we help you?</h2>
               <ul>
                <img style={{width:"700px"}}className="image1" src="help.svg"/>
                <div>
      {/* <input class="input" type="text" id="name" name="name" placeholder="Your Name"/> */}
    </div>
                <img className="famto" style={{marginLeft:"25px",top:"150px"}} src="name.svg" />
                <img className="famto" style={{marginLeft:"25px",top:"210px"}} src="emailin.svg" />
                <img className="famto" style={{marginLeft:"25px",top:"275px"}} src="phnoin.svg" />
                <img className="famto" style={{marginLeft:"25px",top:"330px"}} src="subjectin.svg" />
                <img className="famto" style={{marginLeft:"25px",top:"420px"}} src="messagein.svg" />
                <img className="famto" style={{marginLeft:"25px",top:"510px"}} src="submitin.svg" />
               </ul>
               </Col>
               </Row>
                </div><br></br>
            </div><br></br>
            <Footer />
        </section>
    );
};

export default Contact;