import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import "./Formation.css"


const blogData = [
  {
    id: 1,
    image: require('../../assets/images/formation1.png'),
    link: '/formationinitiation',
    title: 'Initiation en informatique',
    description: "L\'informatique englobe l\'étude, le développement et l\'utilisation des ordinateurs pour manipuler et traiter l'information, impliquant des concepts tels que le matériel, les logiciels, la programmation, les réseaux et la sécurité'"
  },
  {
    id: 2,
    image: require('../../assets/images/formation2.png'),
    link: '/formationHelpdesk',
    title: 'Modules De La Formation Helpdesk',
    description: "La formation Helpdesk se concentre sur l'acquisition de compétences techniques et relationnelles pour fournir un support efficace aux utilisateurs, couvrant la résolution de problèmes informatiques, la communication client, la gestion des tickets et la familiarité avec les systèmes et logiciels couramment utilisés "
  },
  {
    id: 3,
    image: require('../../assets/images/formation3.png'),
    link: '/formationWeb',
    title: 'Formation web developer',
    description: "La formation de développeur web vise à enseigner les compétences nécessaires pour concevoir, créer et maintenir des sites web fonctionnels, en couvrant des langages de programmation tels que HTML, CSS, JavaScript, ainsi que des frameworks et des outils modernes, tout en mettant l'accent sur la résolution de problèmes, le design responsive et la collaboration avec des bases de données"
  },
  {
    id: 4,
    image: require('../../assets/images/formation4.png'),
    link: '/formationTechnicien',
    title: 'Formation Technicien PC et Réseaux',
    description: "La formation de Technicien PC et Réseaux se focalise sur le développement de compétences techniques liées à la maintenance, à la configuration et à la résolution de problèmes liés aux ordinateurs et aux réseaux. Cela inclut la gestion du matériel, le dépannage des logiciels, la mise en réseau, la sécurité informatique, et la compréhension des protocoles de communication, formant ainsi des professionnels capables de prendre en charge l'infrastructure informatique au niveau matériel et réseau."
  },
]

function Formation() {
  return (

  <section className='formation'>

    {
            blogData.map(blog => {
              return (


                <>
 <div className='formation-block'>
<div className='formationLeft'>
 <img src={blog.image} />
</div>
<div className='formationRight'>
<h2>{blog.title}</h2>
<p>{blog.description} </p>
<p>      <a className="btn btn-primary" href={blog.link}> En savoir plus  <i className="fas fa-chevron-right"></i></a> </p>

 </div>
</div>
        </>
                      )
            })
          }

  </section>

  )
}

export default Formation;