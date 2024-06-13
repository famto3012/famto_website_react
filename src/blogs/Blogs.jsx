import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Blogs = () => {

    return (
        <section style={{backgroundColor:"white"}}>
            
            <div className="parent" style={{width:"1400px"}}>
                <div className="fill3">
                <img className="image1" style={{width:"1519px", top:"-80px",opacity:"300%"}} src="blogsimg.svg" /> </div>
                <Link to="/home"><img class="image2" src="logo.svg" /></Link>
                <div className="famto" style={{top:"300px", textAlign:"center" ,fontFamily:"Poppins"}}><h3>The Digital Wave: FMCG Embraces Delivery for <br></br>Tomorrow's Consumer</h3></div>
                <div className="famto" style={{fontFamily:"Poppins" , top:"400px"}}>"Bringing Stories of life"</div>
                </div>
                <div>
                    <img style={{width:"1470px",}} src="blogdetails.svg"/><br></br>
                <br/></div><br/>
            
            <Footer />
        </section>

    );

};

export default Blogs;
