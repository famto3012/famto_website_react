import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TermsAndConditions from './terms&conditions/TermsAndConditions.jsx'
import FAQ from './faq/FAQ.jsx'
import CancellationAndRefundPolicy from './cancellationandrefundpolicy/CancellationAndRefundPolicy.jsx'
import PrivacyPolicy from './privacypolicy/PrivacyPolicy.jsx'
import ContactForm from './contactform/ContactForm.jsx'
import HomePage from './homepage/HomePage';
import AboutUs from './aboutUs/AboutUs.jsx';
import Footer from './footer/Footer.jsx';
import Team from './team/Team.jsx';
import Blog from './blog/Blog.jsx';
import Contact from './contact/Contact.jsx';
import Blogs from './blogs/Blogs.jsx';
import TeamPic from "./teams/TeamPic.jsx";



function App() {


  return (

    <BrowserRouter>
    <Routes>
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/refundpolicy" element={<CancellationAndRefundPolicy />}/>
      <Route path="/privacy" element={<PrivacyPolicy />}/>
      <Route path="/contactform" element={<ContactForm />} />
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
  );


}

export default App
