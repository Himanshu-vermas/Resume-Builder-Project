import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import NavBar from './Components/NavBar';
import Header from './Components/Header'; // Import the Header component
import Home from './Components/Home';
import HomeAlternate from './Components/Home2'; // Renamed to HomeAlternate
import About from './Components/About';
import Preview from './Components/Preview';
import ResumeTemplate from './Components/ResumeTemplate';
import ContactUs from './Components/ContactUs';
import ResumeBasic from './Components/ResumeBasic';
import RegisterForm from './Components/RegisterForm';
import Footer from './Components/Footer';
import ForgotPassword from './Components/ForgotPassword';
import TermsOfUse from './Components/TermsOfUse';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<>
            <Header /> {/* Include Header on the homepage */}
            <Home />
          </>} />
          <Route path="/about" element={<>
            <Header /> {/* Include Header on the About page */}
            <About />
          </>} />
          <Route path="/preview" element={<>
            <Header /> {/* Include Header on the Preview page */}
            <Preview />
          </>} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/contactUs" element={<>
            <Header /> {/* Include Header on the Contact Us page */}
            <ContactUs />
          </>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/termsOfUse" element={<TermsOfUse />} />
          <Route path="/resumeBasic" element={<ResumeBasic />} />
          <Route path="/resumeTemplate" element={<ResumeTemplate />} />
        
          <Route path="/registerForm" element={<RegisterForm />} />
        </Routes>
        
        <HomeAlternate /> {/* Using HomeAlternate instead of Home2 */}
        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
