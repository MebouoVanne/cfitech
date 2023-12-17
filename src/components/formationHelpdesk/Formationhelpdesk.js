import React from 'react'
import Card from 'react-bootstrap/Card';
import img14 from '../../assets/images/img14.jpg'
import img11 from '../../assets/images/img11.jpg'
import './Formationhelpdesk.css'
import { Button } from 'react-bootstrap';



export default function Formationhelpdesk() {
  return (
    <div>
       
        <Card className="bg-dark text-white">
      <Card.Img src={img14} height={600}  width={600} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><h1><span style={{backgroundColor:'white', color:'black'}}>Modules De La Formation Helpdesk</span></h1></Card.Title>
        <Card.Text>
       <h3><span style={{backgroundColor:'white', color:'black'}}>Aujourd’hui l’informatique est devenue un outil indispensable et l’utilisation d’un ordinateur est bien souvent obligatoire tant dans le cadre familial que dans le cadre professionnel.</span></h3> 
        </Card.Text>
        <a className="btn btn-primary" style={{ textAlign:"center"}} href='/inscription' > S'inscrire <i className="fas fa-chevron-right"></i></a>
      </Card.ImgOverlay>
    </Card>

  <div class="grid-contain">
    <div className='boxContainer d-flex'>
      <div className='progimg'>
        <img src={img11} height={400} width={400} alt='image' className='img-fluid'/>
      </div>
      <div className='prog'>
     
      <h1> <i class="fa-solid fa-file-lines" style={{color:'#063970', padding:'20px'}}></i><span style={{backgroundColor:'red'}}>Programmes des cours</span></h1>
      <div className='liste'>
      <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Assistance Aux Utilisateurs De Bureautique</p>
       <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Installation, Configuration, Mise à Jour & Déploiement d’un Client Windows 10</p>
       <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Installation, Configuration, Mise à Jour & Déploiement d’un Client Linux Ubuntu</p>
       <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Intégrer & Dépanner Les Micro-Ordinateurs, smartphones, tablettes.</p>
       <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Installation, Configuration, Dépannage</p>
      </div>
   
       
      </div>
    </div>
  </div>
     <div class="grid-container">
        <div>
        <i class="fa-solid fa-user" style={{fontSize:'40px', color:'#063970'}}></i>
          <h3><span style={{backgroundColor:'red'}}>Pour qui ?</span></h3>
          <p> Être demandeur (se) d’emploi inoccupé(e), inscrit(e) à Actiris et disponible à temps plein.</p>   
        </div>
          
        <div>
        <i class="fa-regular fa-calendar-days" style={{fontSize:'40px', color:'#063970'}}></i>
          <h3><span style={{backgroundColor:'red'}}>Horaires:</span></h3>
          <p>Lundi au vendredi 8h30 à 16h.</p>
        </div>
        
      <div>
      <i class="fa-solid fa-wand-magic-sparkles" style={{fontSize:'40px', color:'#063970'}}></i>
          <h3><span style={{backgroundColor:'red'}}>Intéressé (e) ? Que faire</span></h3>
          <h5>Présentez-vous directement à notre adresse :</h5>
              <p>CFITECH</p>
              <p>Rue de l’EgLise Sainte-Anne 63</p>
              <p>1081 Koekelberg</p>
              <p>Tél:02 445 39 08</p>
              <p>L’inscription du :Lundi au vendredi</p>
              <p>Heure:9h à 16h</p>
       </div>


</div>

    </div>
  )
}