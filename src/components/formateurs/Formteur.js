import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./Formateur.css"

const formateurData = [
  {
    id: 1,
    image: require('../../assets/images/photo1.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Gabriel Hart',
    designation: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 2,
    image: require('../../assets/images/photo1.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'David Antony',
    designation: 'Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 3,
    image: require('../../assets/images/photo3.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Nicholas Perry',
    designation: 'UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 4,
    image: require('../../assets/images/photo2.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sarah Wills',
    designation: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
]

function Formateur() {
  return (
    <section id="formateur" className="block formateur-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nos formateurs</h2>
          <div className="subtitle">Des experts a votre disposition</div>
        </div>
        <Row>
          {
            formateurData.map(formateur => {
              return (
                <Col sm={3} key={formateur.id}>
                  <div className='image'>
                    <Image src={formateur.image} />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={formateur.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={formateur.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={formateur.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{formateur.name}</h3>
                    <span className='designation'>{formateur.designation}</span>
                    <p>{formateur.description}</p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default Formateur;