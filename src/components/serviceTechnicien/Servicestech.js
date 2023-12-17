import React from 'react'
import { Card, Button } from 'react-bootstrap'
import img3 from '../../assets/images/img3.jpg'
import './Servicestech.css'

export default function Servicestech() {
  return (
    <div>   
             <Card>
                <Card.Img variant="top" src={img3}  height={600}  width={600}/>
                <Card.Body>
                <Card.Text>
                <h1><i class="fa-solid fa-screwdriver-wrench" style={{padding:'20px'}}></i>Services Techniciens PC</h1>
                </Card.Text>
                <a className="btn btn-primary" href="/contact"> Prendre contact  <i className="fas fa-chevron-right"></i></a>
                </Card.Body>
              </Card>
        

       <div className='service'>
      
        <p><i class="fa-solid fa-wrench" style={{padding:'20px'}}></i><strong>Dépannage matériel :</strong> Réparation ou remplacement de composants défectueux sur les ordinateurs.</p>
        <p><i class="fa-solid fa-wrench" style={{padding:'20px'}}></i><strong>Maintenance préventive :</strong> Effectuer des tâches de routine pour prévenir les pannes matérielles.</p>
        <p><i class="fa-solid fa-wrench" style={{padding:'20px'}}></i><strong>Installation et configuration :</strong>  Installation de nouveaux ordinateurs et configuration des systèmes d'exploitation.</p>
        <p><i class="fa-solid fa-wrench" style={{padding:'20px'}}></i><strong>Gestion des réseaux :</strong> Configuration et maintenance des réseaux informatiques, y compris routeurs et commutateurs</p>
        <p><i class="fa-solid fa-wrench" style={{padding:'20px'}}></i><strong>Sécurité informatique :</strong> Mise en place de mesures de sécurité pour protéger les systèmes et les réseaux.</p>
        <p><i class="fa-solid fa-wrench" style={{padding:'20px'}}></i><strong>Support technique :</strong> Fournir une assistance technique aux utilisateurs pour résoudre les problèmes liés à l'informatique.</p>
        <p><i class="fa-solid fa-wrench" style={{padding:'20px'}}></i><strong>Gestion des sauvegardes :</strong> Mettre en place des solutions de sauvegarde pour protéger les données importantes.</p>
       </div>
      


    </div>
  )
}