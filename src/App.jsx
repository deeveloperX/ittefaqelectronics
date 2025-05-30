import { Routes, Route } from 'react-router-dom';
import OffcanvasNavbar from './components/OffcanvasNavbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import AirCoolers from './pages/categories/AirCoolers';
import Refrigerators from './pages/categories/Refrigerators';
import AirConditioners from './pages/categories/AirConditioners';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <OffcanvasNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Category routes */}
        <Route path="/products/airconditioners" element={<AirConditioners />} />
        <Route path="/products/refrigerators" element={<Refrigerators />} />
        <Route path="/products/aircoolers" element={<AirCoolers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
