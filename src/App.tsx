import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ITServices from './pages/ITServices';
import CloudInfrastructure from './pages/CloudInfrastructure';
import DigitalMarketing from './pages/DigitalMarketing';
import ERP from './pages/ERP';
import LMS from './pages/LMS';
import TrainingPlacement from './pages/TrainingPlacement';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="it-services" element={<ITServices />} />
          <Route path="cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="erp" element={<ERP />} />
          <Route path="lms" element={<LMS />} />
          <Route path="training-placement" element={<TrainingPlacement />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
