import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Contact.css"
import Image from 'react-bootstrap/Image';
import img4 from "../../assets/images/img4.png"
import { Card } from 'react-bootstrap';

function Contact() {
  return (
    <>
     <Image src={img4} fluid />;
    <section id="contact" className="block contact-block">

        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <h3>Quand ?</h3>
              - de lundi à vendredi de 9h à 17h
              
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <h3>Contact ?</h3>
              Téléphone: 02 445 39 08   Email:info@cfitech.be
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <h3>Ou ?</h3>
              Rue de l’Eglise Sainte-Anne 63
            </li>
          </ul>
        </div>

        <Form className='contact-form'>
        <div className="title-holder">
          <h2>Envoyer nous un message</h2>
        </div>
          <Row>
            <Col sm={4}>
              <Form.Label>Nom</Form.Label>
              <Form.Control style={{height:"50px"}} type="text" placeholder="Entrer votre nom" required />
            </Col>
            <Col sm={4}>
              <Form.Label>Prenom</Form.Label>
              <Form.Control type="email" style={{height:"50px"}} placeholder="Entrer votre email" required />
            </Col>
            <Col sm={4}>
              <Form.Label>Tél</Form.Label>
              <Form.Control type="tel" style={{height:"50px"}} placeholder="Entrer votre numéro" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Label>Message</Form.Label>
              <Form.Control type="textarea" style={{height:"150px"}} placeholder="Votre message" required />
            </Col>
          </Row>
          <div className='btn-holder  '>
            <Button variant='primary' type="submit" size="lg">Envoyer</Button>
          </div>
        </Form>


      <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"></iframe>
      </div>
      
    </section>

    </>

  );
}

export default Contact;