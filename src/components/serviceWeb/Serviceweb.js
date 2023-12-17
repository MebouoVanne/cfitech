import React from 'react'
import { Card, Button } from 'react-bootstrap'
import img15 from '../../assets/images/img15.jpg'
import './Serviceweb.css'

export default function Serviceweb() {
  return (
    <div>
           <Card>
                <Card.Img variant="top" src={img15}  height={600}  width={600}/>
                <Card.Body>
                <Card.Text>
                <h1><i class="fa-solid fa-code" style={{padding:'20px'}}></i>Service de developpeur</h1>
                </Card.Text>
                <a className="btn btn-primary" href="/contact"> Prendre contact  <i className="fas fa-chevron-right"></i></a>
                </Card.Body>
              </Card>
        
        <div className='service'>
        <p><i class="fa-solid fa-person-digging" style={{padding:'20px'}}></i><strong>Conception et développement de sites web: </strong> Création de sites web, du design initial à la programmation.</p>
        <p><i class="fa-solid fa-person-digging" style={{padding:'20px'}}></i><strong>Développement d'applications web :</strong> Création d'applications interactives et fonctionnelles pour le web.</p>
        <p><i class="fa-solid fa-person-digging" style={{padding:'20px'}}></i><strong>Intégration de contenu :</strong> Intégration de textes, images, vidéos et autres contenus dans les sites web.</p>
        <p><i class="fa-solid fa-person-digging" style={{padding:'20px'}}></i><strong>Développement Front-End :</strong> Programmation de l'interface utilisateur, avec des technologies comme HTML, CSS, JavaScript.</p>
        <p><i class="fa-solid fa-person-digging" style={{padding:'20px'}}></i><strong>Développement Back-End :</strong> Programmation du côté serveur pour assurer la fonctionnalité et la gestion des données.</p>
        <p><i class="fa-solid fa-person-digging" style={{padding:'20px'}}></i><strong>Optimisation de la performance :</strong> Amélioration de la vitesse et de l'efficacité des sites web.</p>
        <p><i class="fa-solid fa-person-digging" style={{padding:'20px'}}></i><strong>Maintenance et mises à jour :</strong> Assurer la maintenance continue des sites web existants et les mettre à jour.</p> 
        </div>
        
    </div>
  )
}