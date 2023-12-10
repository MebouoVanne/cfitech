import { Carousel } from 'bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Apropos from './components/apropos/Apropos';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CarouselFormations from './components/carousel/CarouselFormations';
import Contact from './components/contact/Contact';
import Formation from './components/formation/Formation';
import Accueil from './components/accueil/Accueil';
import CarouselPartenaire from './components/carousel/CarouselPartenaire';
import Service from './components/Service/Service';
import Jobs from './components/Jobs/Jobs';


function App() {
  return ( 
    <>
   <Header/>
   <CarouselFormations/>
   <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/job" element={<Jobs />} />
      </Routes>
  </Router>

   <Footer/> 
    </>
  );
}

export default App;