import React from "react";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Blog =() => {
    return(

        <section style={{backgroundColor:"white"}}>
            <div className="parent">
            
                    <div className="fill2">
                <img className="image1" style={{width:"1540px",top:"-29px",opacity:"100%"}} src="blog.svg" /></div>
                <Link to="/home"><img class="image2" src="logo.svg" /></Link>
                <div className="famto" style={{top:"32%"}}>Blogs</div>
                
        
            <div style={{height:"600px"}}>
                <img style={{top:"300px" , backgroundColor:"white"}} src="blogs.svg" /><br></br>
            </div><br></br>
            <Footer />
            </div>
        </section>
      
    );
};

export default Blog;
