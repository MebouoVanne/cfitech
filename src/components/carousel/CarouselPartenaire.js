import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function CarouselPartenaire() {
    var partenaireCfitech = [
        {
          id: 1,
          image: require('../../assets/images/partenaire1.jpg'),
        },
        {
          id: 2,
          image: require('../../assets/images/partenaire2.jpg'),
        },
        {
          id: 3,
          image: require('../../assets/images/partenaire3.jpg'),
        },
        {
          id: 4,
          image: require('../../assets/images/partenaire4.jpg'),
        },
        {
          id: 5,
          image: require('../../assets/images/partenaire5.jpg'),
        },
        {
          id: 6,
          image: require('../../assets/images/partenaire6.jpg'),
        }
        
      ]
  return (
    <section id="home" className="hero-block-partenaire">
        <Row className='portfoliolist'>
          {
            partenaireCfitech.map(partenaire => {
              return (
                <Col sm={4} key={partenaire.id}>
                  <div className='portfolio-wrapper'>
                      <Image src={partenaire.image} style={{height:"100px"}} />
                  </div>
                </Col>
              );
            })
          }
        </Row>
    </section>
  )
}
