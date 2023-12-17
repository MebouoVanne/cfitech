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
import Inscription from './components/inscription/Inscription';
import Formationhelpdesk from './components/formationHelpdesk/Formationhelpdesk';
import Formationtech_pc_réseaux from './components/formationPcReseau/Formation_pc_reseaux';
import Formationweb from './components/FormationWeb/Formationweb';
import Formationinitiation from './components/formationInitiation/Formationinitiation';
import Servicestech from './components/serviceTechnicien/Servicestech';
import Serviceweb from './components/serviceWeb/Serviceweb';


function App() {
  return ( 
<div className="App">
    <Header/>

    <main className='main'>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/formationHelpdesk" element={<Formationhelpdesk />} />
        <Route path="/formationTechnicien" element={<Formationtech_pc_réseaux />} />
        <Route path="/formationWeb" element={<Formationweb />} />
        <Route path="/formationinitiation" element={<Formationinitiation />} />
        <Route path="/serviceTechnicien" element={<Servicestech />} />
        <Route path="/serviceWeb" element={<Serviceweb />} />
      </Routes>
  </Router>
    </main>




<CarouselPartenaire/>
   <Footer/> 
    </div>
  );
}

export default App;