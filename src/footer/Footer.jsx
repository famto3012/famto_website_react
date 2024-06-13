import {Row, Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";




const Footer = () => {
    return (
        <section className="bg" style={{ width:"1540px", height:"300px" ,marginBottom:"-500px"}} >
            <Row>
            <div >
                <Col style={{width:"500px"}}>
                <Link to="/home" ><img style={{height:"100px" , marginTop:"80px", marginLeft:"-100px"}} src="footer.svg"></img></Link>
                </Col>
            </div>
            <div style={{color:"white" }}>
            <Row>
            
                <Row style={{margin:"80px", marginLeft:"400px", fontFamily:"Poppins"}}>
                <Col style={{width:"150px", fontFamily:"Poppins"}}>
                Contact Us
                <div style={{textAlign:"left"}}>
                <ul style={{fontFamily:"Poppins", color:"white",lineHeight:""}}>
                    <img src="footer2.svg" ></img>  Phone<br/>
                    <br/><img src="footer3.svg"/>  Mail<br/>
                    <br/><img src="footer4.svg"/>  Adress<br></br>
                    <br/><img src="footer5.svg"/> <a style={{color:"white"}} href="www.famto.in">  Website</a><br/>
                </ul>
                </div>
                </Col>
            
               
                <Col style={{width:"150px", fontFamily:"Poppins"}}>
                Company
                <div style={{textAlign:"left"}}>
                <ul><Link to="/aboutus" style={{color:"white"}}>About Us</Link></ul>
                <ul><Link to="/team" style={{color:"white"}}>Team</Link></ul>
                <ul><Link to="/blog" style={{color:"white"}}> Blog</Link></ul>
                </div>
                </Col>
                
                
                <Col style={{width:"250px", fontFamily:"Poppins",marginLeft:"0px"}}>
               <div style={{textAlign:"left" , marginLeft:"40px"}}> Help & Legal</div>
                <div style={{textAlign:"left"}}>
                <ul>FAQs</ul>
                <ul>Terms & Conditions</ul>
                <ul>Privacy Policy</ul>
                <ul>Cancellation & Refund Policy</ul>
                </div>
                </Col>
                
                
                </Row>
            </Row>
        
            </div>
            </Row>

        </section>

    );
};

export default Footer;