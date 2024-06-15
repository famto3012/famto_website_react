import { Row, Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";





const Footer = () => {
    return (
        <section className="bg" style={{ width: "100%", height: "300px" }} >
            <Row style={{ height: "100%" }}>

                <Col span={12}>
                    <Link to="/" ><img style={{ height: "100px", marginTop: "80px", display: "flex", marginLeft: "130px" }} src="footer.svg"></img></Link>
                </Col>

                {/* <div style={{color:"white" }}> */}
                <Col span={12}>

                    <Row style={{ marginTop: "60px", fontFamily: "Poppins" }}>
                        <Col span={7} style={{ fontFamily: "Poppins", textAlign: "left" }}>

                            <div style={{ textAlign: "left", color: "white" }}>
                                {/* <ul style={{fontFamily:"Poppins", color:"white",lineHeight:""}}>
                    Contact Us<br/>
                    <br/>
                    <img src="footer2.svg" ></img>  Phone<br/>
                    <br/><img src="footer3.svg"/>  Mail<br/>
                    <br/><img src="footer4.svg"/>  Adress<br></br>
                    <br/><img src="footer5.svg"/> <a style={{color:"white"}} href="www.famto.in">  Website</a><br/>
                </ul> */}
                                {/* <ul style={{fontFamily:"Poppins", color:"white", listStyleType:"none"}}> */}
                                <ul>Contact Us</ul>
                                <ul><img src="footer2.svg" ></img>  Phone</ul>
                                <ul><img src="footer3.svg" />  Mail</ul>
                                <ul><img src="footer4.svg" />  Adress</ul>
                                <ul><img src="footer5.svg" /> <a style={{ color: "white" }} href="www.famto.in">  Website</a></ul>
                                {/* </ul> */}
                            </div>
                        </Col>


                        <Col span={7} style={{ fontFamily: "Poppins" }}>

                            <div style={{ textAlign: "left", color: "white" }}>
                                <ul>Company</ul>
                                <ul><Link to="/aboutus" style={{ color: "white" }}>About Us</Link></ul>
                                <ul><Link to="/team" style={{ color: "white" }}>Team</Link></ul>
                                <ul><Link to="/blog" style={{ color: "white" }}> Blog</Link></ul>
                            </div>
                        </Col>


                        <Col span={7} style={{ fontFamily: "Poppins", marginLeft: "0px" }}>
                            <div style={{ textAlign: "left", color: "white" }}>
                                <ul style={{ textAlign: "left", color: "white" }}>Help & Legal</ul>
                                <ul><Link to="/faq" style={{ color: "white" }}> FAQs</Link></ul>
                                <ul><Link to="/terms" style={{ color: "white" }}> Terms & Conditions</Link></ul>
                                <ul><Link to="/privacy" style={{ color: "white" }}> Privacy Policy</Link></ul>
                                <ul><Link to="/refundpolicy" style={{ color: "white" }}> Cancellation and Refund Policy</Link></ul>

                            </div>
                        </Col>

                    </Row>
                </Col>

            </Row>

            {/* </div> */}


        </section>

    );
};

export default Footer;