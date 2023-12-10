import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../../assets/images/img1.png'),
    time: '15 Nov 2016',
    title: 'Initiation en informatique',
    description: "L\'informatique englobe l\'étude, le développement et l\'utilisation des ordinateurs pour manipuler et traiter l'information, impliquant des concepts tels que le matériel, les logiciels, la programmation, les réseaux et la sécurité'",
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../../assets/images/img1.png'),
    time: '10 Nov 2016',
    title: 'Modules De La Formation Helpdesk',
    description: "La formation Helpdesk se concentre sur l'acquisition de compétences techniques et relationnelles pour fournir un support efficace aux utilisateurs, couvrant la résolution de problèmes informatiques, la communication client, la gestion des tickets et la familiarité avec les systèmes et logiciels couramment utilisés ",
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../../assets/images/img1.png'),
    time: '07 Nov 2016',
    title: 'Formation web developer',
    description: "La formation de développeur web vise à enseigner les compétences nécessaires pour concevoir, créer et maintenir des sites web fonctionnels, en couvrant des langages de programmation tels que HTML, CSS, JavaScript, ainsi que des frameworks et des outils modernes, tout en mettant l'accent sur la résolution de problèmes, le design responsive et la collaboration avec des bases de données",
    link: 'https://www.twitter.com'
  },
  {
    id: 4,
    image: require('../../assets/images/img1.png'),
    time: '15 Nov 2016',
    title: 'Formation Technicien PC et Réseaux',
    description: "La formation de Technicien PC et Réseaux se focalise sur le développement de compétences techniques liées à la maintenance, à la configuration et à la résolution de problèmes liés aux ordinateurs et aux réseaux. Cela inclut la gestion du matériel, le dépannage des logiciels, la mise en réseau, la sécurité informatique, et la compréhension des protocoles de communication, formant ainsi des professionnels capables de prendre en charge l'infrastructure informatique au niveau matériel et réseau.",
    link: 'https://www.google.com'
  },
]

function Formation() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={6} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default Formation;