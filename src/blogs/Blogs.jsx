import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Blogs = () => {

    return (
        <section style={{backgroundColor:"white"}}>
            
            <div className="parent" style={{width:"100%"}}>
                <div className="fill8">
                <img className="image1" style={{width:"100%", top:"-80px",opacity:"300%"}} src="blogsimg.svg" /> </div>
                <Link to="/home"><img class="image2" src="logo.svg" /></Link>
                <div className="famto" style={{top:"300px", textAlign:"center",fontSize:"32px",fontWeight:"semibold"}}>The Digital Wave: FMCG Embraces Delivery for <br></br>Tomorrow's Consumer</div>
                <div className="famto" style={{fontFamily:"Poppins" , top:"400px",textAlign:"center"}}>"Bringing Stories of life"</div>
                </div>
                <div>
                    <img style={{width:"100%",}} src="blogdetails.svg"/><br></br>
                <br/></div><br/>
            
            <Footer />
        </section>

    );

};

export default Blogs;
