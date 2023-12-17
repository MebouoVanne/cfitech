import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import apropos from "../../assets/images/apropos.png"
import "./Apropos.css"

export default function Apropos() {
  return (
    
    <section  className='block apropos-block' >
        
    <Container fluid >
    <Image src={apropos} style={{height:"400px",width:"100%"}} fluid />;

      <Row>
        <Col sm={12}>
          <h2 className='title'>Le fondateur du centre de formation</h2>
          <p>Jean-Marie Ntwali est le fondateur du Centre CFITECH qui est une Section du Service Emploi de Koekelberg asbl. Un manager proche de ses collaborateurs, à l’écoute de ses stagiaires pour mieux leur offrir une formation inspirante et motivante.Le centre a été créé en 2016, pour venir en aide aux personnes qui sont à la recherche d’acquisition de compétences.</p>
        </Col>
        <Col sm={6}>
        <Image src={img1} />
        </Col>
        <Col sm={6}>
        <h2>ce qu'il faut savoir sur CFITECH</h2>
          <p>CFITECH, Centre de formation informatique et webmaster dispense des formations hybrides (présentiel/distanciel) dans divers domaines de l’informatique. Notre Centre agréé par Actiris et Bruxelles Formation délivre une formation certifiante. Nos cours se focalisent principalement sur la maintenance PC/Réseaux et le web développement. Mais aussi, des formations privées courtes par le biais des chèques-Tic d’Actiris. Et d’autres actions sociales sont entreprises, notamment la formation de jeunes à des ateliers ludiques et gratuits de contenu divers lié à l’informatique, 
            tous les mercredis après midi. (Contrat de quartier durable)</p>
        </Col>
        <Col sm={12}>
        <h1 className='title'>Mission de notre centre de formation en informatique.</h1>
        </Col>
        <Col sm={6}>
        <h2>Notre missionn</h2>
          <p>Notre mission est d’être au service des demandeurs d’emploi en général et en particulier les personnes sans CESS à la recherche d’un emploi. Nous existons parce qu’ils ont besoin d’acquérir de nouvelles compétences dans l’IT pour une insertion professionnelle. Il est question pour nous de leur donner confiance en l’avenir. Ceci passe par l’encadrement qu’ils reçoivent, le suivi dont ils bénéficient et surtout la qualité du savoir qui leur est transmis. Les nombreux ateliers pratiques leur permettent d’être confrontés aux réalités du métier</p>
        </Col>
        <Col sm={6}>
        <Image src={img2} />
        </Col>
        <Col sm={6}>
        <Image src={img3} />
        </Col>
        <Col sm={6}>
        <h2 className='title'>Le fondateur du centre de formation</h2>
          <p>Le stagiaire est suivi par des formateurs conscients de ses difficultés et, en fonction, adapte l’apprentissage qui se veut de qualité. L’équipe pédagogique est jeune et dynamique, proche du stagiaire et à l’écoute. Travaillant dans l’optique de vous donner le meilleur dans une approche inspirante qui vous projette vers l'avenir</p>
        </Col>
      </Row>
    </Container>
  </section>
   )
}
