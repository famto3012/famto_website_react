import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TermsAndConditions from './terms&conditions/TermsAndConditions.jsx'
import FAQ from './faq/FAQ.jsx'
import CancellationAndRefundPolicy from './cancellationandrefundpolicy/CancellationAndRefundPolicy.jsx'
import PrivacyPolicy from './privacypolicy/PrivacyPolicy.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/refundpolicy" element={<CancellationAndRefundPolicy />}/>
      <Route path="/privacy" element={<PrivacyPolicy />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
