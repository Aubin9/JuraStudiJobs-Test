import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/home/about";
import Blogs from "./pages/home/blogs";
import Connexion from "./pages/home/connexion";
import JobAlert from "./pages/home/jobalert";
import Research from "./pages/home/search";
import CS from "./pages/JuraStudiJobs/CS";
import Elec from "./pages/JuraStudiJobs/Electrical";
import Mechanical from "./pages/JuraStudiJobs/Mechanical";
import JobDetails from "./pages/home/jobDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/job-alerts" element={<JobAlert />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/results" element={<Research />} />
        <Route path="/Jurastudijobs/cs" element={<CS />} />
        <Route path="/Jurastudijobs/elec" element={<Elec />} />
        <Route path="/Jurastudijobs/mechanical" element={<Mechanical />} />
        <Route path="/jobs/details/semester" element={<JobDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
