import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import MahaMumbai from "./pages/MahaMumbai";
import AboutUsPage from './pages/AboutUsPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicePage from './pages/ServicePage';
import ScrollToTop from './components/ScrollToTop';
import ContactUsPage from './pages/ContactusPage';
import GalleryPage from "./components/GalleryPage"
import LandingPage from "./pages/LandingPage"

export default function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/landingpage';

  return (
    <div>
      {!isLandingPage && <Navbar />}
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/mahamumbai" element={<MahaMumbai />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    {!isLandingPage && <Footer/>}
    </div>
  );
}
