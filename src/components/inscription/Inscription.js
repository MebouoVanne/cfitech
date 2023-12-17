import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Inscription.css'
import { Card } from 'react-bootstrap';
import img3 from '../../assets/images/img3.jpg'

export default function Inscription() {
  return (
    <div className='container'>

     <div className='icon'>
     <h1 style={{color:"#EA5036"}}><i style={{paddingRight:"24px"}} class="fa-solid fa-user"></i> Formez vous </h1>
        
    </div>
        
        <p>Façonnez Votre Avenir Tech : Rejoignez Notre Formation en Web Développement et Technologies PC pour une Expérience d'Apprentissage Interactive, des Projets Captivants, et une Préparation Complète à une Carrière Distinguée. Inscrivez-vous Maintenant pour un Voyage Passionnant vers l'Excellence Technologique !</p>
    <Form className='formulaire'> 
    <h1 >Inscription</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="email" placeholder="Nom" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" placeholder="Prénom" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Addresse</Form.Label>
        <Form.Control placeholder="1234 Main St" type='text' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="email" type='email' />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ville</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Formation</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

       
      </Row>

      <div className='button'>
      <a className="btn btn-primary" > s'enregistrer <i className="fas fa-chevron-right"></i></a>
      </div>
     
    </Form>
    </div>


  )
}