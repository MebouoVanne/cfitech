import Carousel from 'react-bootstrap/Carousel';
import "./CarouselFormations.css"

var formationCfitech = [
  {
    id: 1,
    image: require('../../assets/images/img1.png'),
    title: 'The perfect design for your website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../../assets/images/img2.png'),
    title: 'Start Your Future Financial Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../../assets/images/img3.png'),
    title: 'Enjoy the Difference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com'
  }
]

function CarouselFormations() {
  return (
    <section id="home" className="hero-block">
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
                    <h2>{formation.title}</h2>
                    <p>{formation.description}</p>
                    <a className="btn btn-primary" href={formation.link}>Learn More <i className="fas fa-chevron-right"></i></a>
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