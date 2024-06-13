import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './homepage/HomePage';
import AboutUs from './aboutUs/AboutUs.jsx';
import Footer from './footer/Footer.jsx';
import Team from './team/Team.jsx';
import Blog from './blog/Blog.jsx';
import Contact from './contact/Contact.jsx';
import Blogs from './blogs/Blogs.jsx';
import TeamPic from './teams/TeamPic.jsx/index.js';


function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/teams" element={<TeamPic />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
