import React from 'react'
import Card from 'react-bootstrap/Card'
import img15 from '../../assets/images/img15.jpg'
import img13 from '../../assets/images/img13.jpg'
import './Formationweb.css'
import { Button } from 'react-bootstrap'

export default function Formationweb() {
  return (
    <div>
       
        <Card className="bg-dark text-white">
      <Card.Img src={img15} height={600}  width={600} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title> <h1><span style={{backgroundColor:'white', color:'black'}}>Formation web developer</span></h1></Card.Title>
        <Card.Text>
         <h3><span style={{backgroundColor:'white', color:'black'}}>Dans le domaine de l’informatique, le développeur est la personne qui réalise des applications, des logiciels, des fonctionnalités particulières sur un site web et qui les met en œuvre. Dans un milieu concurrentiel, un développeur doit faire preuve de rigueur et d’autonomie pour s’imposer. Imagination et concentration sont les mots clés de son travail. Avec ces formations, vous allez pouvoir bénéficier de l’expérience de développeurs aguerris dans la manipulation de langages de programmation complexes.</span></h3>
        </Card.Text>
        <a className="btn btn-primary" style={{ textAlign:"center"}} href='/inscription' > S'inscrire <i className="fas fa-chevron-right"></i></a>
      </Card.ImgOverlay>
    </Card>


        <div class="grid-contain">
          <div className='boxContainer d-flex'>
                      <div className='prog'>      
                              <h2> <i class="fa-solid fa-file-lines" style={{color:'#063970', padding:'20px'}}></i><span style={{backgroundColor:'lightblue'}}>Programmes des cours</span></h2>
                              <div className='liste'>
                                <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Maîtrisez HTML5 et CSS3</p>
                                <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>PHP et MySQL</p>
                                <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Angular</p>
                                <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Java script.</p>
                                <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Symphony programing</p>
                              </div>
                      </div>
                      <div className='progimg'>
                      <img src={img13} height={500} width={500} alt='image' className='img-fluid'/>
                      </div>
                   
        </div>
    </div>

    <div class="grid-container">
        <div>
        <i class="fa-solid fa-user" style={{fontSize:'40px', color:'#063970'}}></i>
          <h3><span style={{backgroundColor:'lightblue'}}>Pour qui ?</span></h3>
          Être demandeur (se) d’emploi inoccupé(e), inscrit(e) à Actiris et disponible à temps plein et avoir entre 18 et 24 ans.Si vous avez plus de 25 ans, la formation est payante  
        </div>
          
        <div>
        <i class="fa-regular fa-calendar-days" style={{fontSize:'40px', color:'#063970'}}></i>
          <h3><span style={{backgroundColor:'lightblue'}}>Horaires:</span></h3>
          <p>Lundi au vendredi 8h30 à 16h.</p>
        </div>
        
      <div>
      <i class="fa-solid fa-wand-magic-sparkles" style={{fontSize:'40px', color:'#063970'}}></i>
          <h3><span style={{backgroundColor:'lightblue'}}>Intéressé (e) ? Que faire ? </span></h3>
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