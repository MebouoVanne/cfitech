import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import service1 from "../../assets/images/service1.png"
import service2 from "../../assets/images/service2.png"
import "./service.css"


export default function Service() {
  return (
    <section  className='service-block'>
    <Container >

      <Row>
        <Col sm={6}>
          <Image className='img' src={service1} />
        </Col>
        <Col sm={6}>
            <h3 className='titre'>Devellopeur Web</h3>
          <p>Un développeur web est un artisan numérique, un maître de l'alchimie informatique qui transforme des idées abstraites en expériences interactives. Armé de langages de programmation tels que HTML, CSS et JavaScript, ce magicien moderne crée des univers en ligne où la forme et la fonction se rencontrent harmonieusement. Il façonne l'interface utilisateur, programme le cœur battant du site côté serveur et assure que chaque ligne
         de code contribue à une expérience utilisateur fluide et captivante. Toujours à l'affût des dernières tendances technologiques, le développeur web jongle entre la créativité artistique et la logique algorithmique pour construire des espaces virtuels qui captivent, interagissent et laissent une empreinte numérique mémorable. En somme, le développeur web est l'architecte virtuel, construisant les fondations du monde en ligne dans lequel nous naviguons tous les jours.</p>
         <Button variant="primary" size="lg" >
        En Savoir Plus
       </Button>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
            <h3 className='titre'>Technicien PC</h3>
          <p>Un technicien PC est le professionnel compétent qui veille au bon fonctionnement des systèmes informatiques. Armé d'une expertise approfondie, il prend en charge l'installation, la configuration et la maintenance des ordinateurs, veillant à ce que chaque composant matériel fonctionne de manière optimale. Que ce soit en résolvant des problèmes matériels, en assurant la sécurité des réseaux, ou en offrant un support technique aux utilisateurs, le technicien PC est le gardien attentif des machines informatiques. Doté de compétences variées, il joue un rôle essentiel dans la résolution des défis techniques, contribuant ainsi à maintenir la fluidité des opérations informatiques pour les entreprises et les particuliers. En résumé, le technicien PC est l'expert fiable qui assure le bon état de santé des ordinateurs, garantissant ainsi un fonctionnement sans accroc du monde numérique qui nous entoure

en savoir plus </p>
         <Button variant="primary" size="lg" >
        En Savoir Plus
       </Button>
        </Col>
        <Col sm={6}>
          <Image className='img' src={service2} />
        </Col>
      </Row>
    </Container>
  </section>
  )
}
