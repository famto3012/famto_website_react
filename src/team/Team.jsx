import React from "react";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Team = () => {

    return(

        <section style={{backgroundColor:"white"}}>
            <div className="parent">
                <div className="fill">
                <img className="image3" style={{width:"1535px"}} src="team.svg"></img></div>
                <Link to="/home"><img class="image2" src="logo.svg" /></Link>
                <div className="famto">Team Famto</div>
            </div>
            
        <div style={{color:"black", textAlign:"justify",padding:"60px"}}>
            <p style={{fontFamily:"Poppins"}}>Welcome to our "Team Famto" page, where you'll discover the vibrant personalities behind our organization. Delve into the diverse backgrounds, expertise, and passions of each member who contributes to our collective success. From visionary leaders to dedicated specialists, our team embodies a shared commitment to excellence, innovation, and collaboration. Get to know the faces driving our mission forward and find out how their unique talents and experiences align with our values and goals.</p>
        </div>
        <div>
            <img src="teams.svg"></img><br></br>
        </div>
        <div style={{marginTop:"50px"}}>
        <Footer />
        </div>
        </section>
      
    );
    
};

export default Team;