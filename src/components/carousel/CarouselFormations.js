import Carousel from 'react-bootstrap/Carousel';
import "./CarouselFormations.css"

var formationCfitech = [
  {
    id: 1,
    link: '/formationinitiation',
    image: require('../../assets/images/img1.png'),
    title: 'Initiation en informatique',
    description: "L\'informatique englobe l\'étude, le développement et l\'utilisation des ordinateurs pour manipuler et traiter l'information, impliquant des concepts tels que le matériel, les logiciels, la programmation, les réseaux et la sécurité'",
  },
  {
    id: 2,
    link: '/formationHelpdesk',
    image: require('../../assets/images/img1.png'),
    title: 'Modules De La Formation Helpdesk',
    description: "La formation Helpdesk se concentre sur l'acquisition de compétences techniques et relationnelles pour fournir un support efficace aux utilisateurs, couvrant la résolution de problèmes informatiques, la communication client, la gestion des tickets et la familiarité avec les systèmes et logiciels couramment utilisés ",
  },
  {
    id: 3,
    link: '/formationWeb',
    image: require('../../assets/images/img1.png'),
    title: 'Formation web developer',
    description: "La formation de développeur web vise à enseigner les compétences nécessaires pour concevoir, créer et maintenir des sites web fonctionnels, en couvrant des langages de programmation tels que HTML, CSS, JavaScript, ainsi que des frameworks et des outils modernes, tout en mettant l'accent sur la résolution de problèmes, le design responsive et la collaboration avec des bases de données",
  },
  {
    id: 4,
    link: '/formationTechnicien',
    image: require('../../assets/images/img1.png'),
    title: 'Formation Technicien PC et Réseaux',
    description: "La formation de Technicien PC et Réseaux se focalise sur le développement de compétences techniques liées à la maintenance, à la configuration et à la résolution de problèmes liés aux ordinateurs et aux réseaux. Cela inclut la gestion du matériel, le dépannage des logiciels, la mise en réseau, la sécurité informatique, et la compréhension des protocoles de communication, formant ainsi des professionnels capables de prendre en charge l'infrastructure informatique au niveau matériel et réseau.",
  },
]

function CarouselFormations() {
  return (
    <section id="home" className="carousel-block">
       <Carousel>
          {
            formationCfitech.map(formation => {
              return (
                <Carousel.Item key={formation.id}>
                  <img
                    className="d-block w-100"
                    src={formation.image}
                    alt={"slide " + formation.id}
                  />
                  <Carousel.Caption>
                    <h1>{formation.title}</h1>
                    <p>{formation.description}</p>
                    <a className="btn btn-primary" href={formation.link}>En savoir plus <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default CarouselFormations;