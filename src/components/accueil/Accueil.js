import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import imgAccueil1 from "../../assets/images/imgAccueil1.png"
import img1 from "../../assets/images/img1.png"
import photo1 from "../../assets/images/photo1.png"
import photo2 from "../../assets/images/photo2.png"
import photo3 from "../../assets/images/photo3.png"
import partenaires from "../../assets/images/partenaires.png"
import "./Accueil.css"
import CarouselPartenaire from '../carousel/CarouselPartenaire';
import Formateur from '../formateurs/Formteur';
import CarouselFormations from '../carousel/CarouselFormations';

export default function Accueil() {
  const servicesData = [
    {
      id: 1,
      link: '/formationinitiation',
      icon: 'fas fa-clone',
      title: 'Initiation en informatique',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 2,
      link: '/formationHelpdesk',
      icon: 'fas fa-snowflake',
      title: 'Formation helpdesk informatique ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 3,
      link: '/formationTechnicien',
      icon: 'fas fa-plug',
      title: 'Formation Technicien pc et reseau ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
      id: 4,
      link: '/formationWeb',
      icon: 'fas fa-desktop',
      title: 'Formation web developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
  ]
  return (
    <>
    
    <section id="accueil" className=" accueil-block">
    <CarouselFormations/>
    <Container>
    <Row>

    <Col sm={12} className='objectifs'>
        <h1>Formez Vous</h1>
        <p>
        Bienvenue sur notre page de formation en Web Développement et Maintenance PC, où vous pourrez acquérir les compétences nécessaires pour exceller dans le domaine passionnant de la technologie.
        Cette formation vise à vous enseigner les fondements du développement web et les compétences techniques essentielles pour devenir un technicien PC qualifié
        </p>
      </Col>
      <Col sm={6}>
      <Image src={imgAccueil1} rounded />
      </Col>
 
    </Row>
 
      {/* <Col sm={4}></Col>
      <Col sm={4}>
        <br/>
       <p>Chez CFITECH, nous fusionnons l'innovation et l'éducation pour vous offrir une expérience d'apprentissage immersive. Explorez les langages du web, maîtrisez les compétences techniques du développement, et devenez un expert en technologie PC.</p>
      </Col>
      <Col sm={4}>
      <Image src={photo1} rounded  className='photo'/>
      </Col>
    </Row>
    <Row>
    <Col sm={2}>
      <Image src={photo2} rounded className='photo' />
      </Col>
      <Col sm={10}>
Nos cours interactifs, dirigés par des formateurs passionnés et experts, créent un environnement dynamique où la passion se transmet de génération en génération de développeurs. Plongez-vous dans des projets stimulants qui vont au-delà des manuels, vous offrant une expérience pratique immersive et stimulante.
Au cœur de notre programme réside une exploration approfondie du développement web et des technologies PC. 
Notre engagement envers votre succès se traduit par une approche holistique, préparant non seulement votre esprit à résoudre des problèmes complexes mais aussi à cultiver une créativité qui transcende les limites. Préparez-vous à une immersion complète, où l'interaction constante avec les formateurs, les pairs et des projets réels façonne votre compréhension pratique et stratégique.
      </Col>
    </Row>
    <Row>
      <Col sm={4}></Col>
      <Col sm={4}>
        <br></br>
       <p>Préparez-vous à une aventure d'apprentissage dynamique. Chaque ligne de code que vous écrivez, chaque dépannage que vous résolvez, vous rapproche de la maîtrise numérique.</p>
      </Col>
      <Col sm={4}>
      <Image src={photo3} rounded  className='photo'/>
      </Col> */}


    <Formateur/>
    <h2>Nos Formations</h2>
    <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={6} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description} <a className="btn btn-primary" href={services.link} > En savoir plus <i className="fas fa-chevron-right"></i></a></p>
                  
                </Col>
              );
            })
          }
        </Row>
        <Row>
      <Col sm={12}>
      <Image src={imgAccueil1} rounded />
      </Col>
       </Row  >
        <Row className='ensembleFormation'>
        <Col className='formationCertifiante'>
        <h2>Formation certifiante</h2>
        <p>Dans le cadre de notre formation de Technicien(ne) Support PC & Réseaux, vous aurez la possibilité de participer à des évaluations externes afin d'obtenir un certificat de compétences acquises en formation délivré par Bruxelles-formation. (CECAF)</p>
        </Col>
        <Col className='formationModulaire'>  
        <h2>Formation modulaire</h2>
        <p>Aujourd'hui, l'informatique est devenue un outil indispensable tant dans le cadre familial que dans le cadre professionnel, nous vous proposons des formations modulaires à la carte afin d'acquérir une autonomie numérique.)</p>
        </Col>
        <Col className='chequeTic'>
        <h2>Chèques TIC Actiris</h2>
        <p>Avec les chèques TIC d'Actiris, améliorez vos connaissances dans la création de site internet. Suivez des formations web de type court à Bruxelles. Et augmentez vos compétences dans la création de sites web, le traitement de photos, la création de logos,…</p>
        </Col>
      </Row>
      {/* <Row>
      <Col sm={2}></Col>

      <Col sm={10}>
      <Image src={partenaires} rounded  className='photoPartenaire'/>
      </Col>
    </Row> */}


    
    </Container>
    </section>

    </>
  )
}
