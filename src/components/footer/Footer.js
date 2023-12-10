// import React from 'react'
// import styled from 'styled-components';
// import { FaFacebookF } from "react-icons/fa";
// import { FaMessage } from "react-icons/fa6";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import LogoPage from './LogoPage';


// export default function Footer() {
//   return (
 
//     <FooterStyled style={{ 
//         backgroundImage: `url("../assets/images/bacground-footer.jpg")` 
//       }}>
//          <div className='Logo'>
//             <LogoPage/>
//          </div>
        //  <div className='info'>
        //     <div className='info-centre-formation'>
        //        <h3> CENTRE DE FORMATION INFORMATIQUE & WEBMASTER </h3>
        //        <p>Nous sommes un centre de formation informatique et webmaster 
        //         qui propose de formations hybrides dans divers domaines de 
        //         l'informatique. CFITECH est un Centre agréé par Actiris et Bruxelles
        //          Formation dont les stagiaires jouissent d'une </p>
        //          <span >formation certifiante</span>
        //     </div>
            // <div className='info-contact-centre-formation'>
            //    <h3>CONTACT INFO</h3> 
            //    <p> Rue de l'Eglise Ste-Anne 63, 1081 Koekelberg.</p>
            //    <p><span>Phone:</span> 02/445 39 08</p>
            //    <p><span>Email:</span> info@cfitech.be</p>
            // </div>
//          </div>
//          <div className='reseaux-sociaux'>
//             <p>Copyright 2021 CFITECH | Tous les droits réservés | cfitech.be | Espace étudiant | Webmail</p>
//             <center className='icon'>
//                 <p><FaFacebookF /></p>
//                 <p><FaMessage /></p>
//                 <p><FaInstagramSquare /></p>
//                 <p><FaLinkedinIn /></p>

//            </center>
            
            
            
            
//          </div>
//     </FooterStyled>

//   )
// }

// const FooterStyled = styled.div`
// border: 1px solid orange;
// height: 350px;
// width: 1440;
// background-color: #23B3C7;
// .Logo{
//     border: 1px solid green;
//     height: 75px;
//     width: 300px;
//     margin-left:700px;
//     background-color: rgba(0, 0, 0, 0.4);
// }
// .info{
//     border: 1px solid black;
//     display: flex;
//     flex-direction: row;
//     height: 165px;
    
    // .info-centre-formation{
    //     border: 1px solid red;
    //     height: 155px;
    //     width: 800px;
    //     margin-left: 20px;
    //     margin-right: 20px;
    //     background-color: rgba(0, 0, 0, 0.4);
    // }
    // .info-contact-centre-formation{
    //     border: 1px solid yellow;
    //     height: 155px;
    //     width: 400px;
    //     margin-left: 20px;
    //     margin-right: 20px;
    //     background-color: rgba(0, 0, 0, 0.4);
    // }
    
// }
// .reseaux-sociaux{
//     border: 1px solid red;
//     height: 100px;
//     width: 700px;
//     align-items: center;
//     margin-left:400px;
//     background-color: rgba(0, 0, 0, 0.4);
//     .icon {
//         border: 1px solid yellow;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-size: 28px;
//         p{
//             padding-right:22px;
//         }

//     }
// }


// span{
//     font-weight: bold;
// }
  
// `;


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import "./Footer.css"
import LogoPage from '../LogoPage';

export default function Footer() {
  return (
    <section id="about" className="block about-block">
    <Container fluid>
      <Row>
        <Col sm={5}>
        </Col>
        <Col sm={7}>

           <LogoPage/>
 
        </Col>
        
        
        <Col sm={8}>
        
            <div className='info-centre-formation'>
               <h3> CENTRE DE FORMATION INFORMATIQUE & WEBMASTER </h3>
               <p>Nous sommes un centre de formation informatique et webmaster 
                qui propose de formations hybrides dans divers domaines de 
                l'informatique. CFITECH est un Centre agréé par Actiris et Bruxelles
                 Formation dont les stagiaires jouissent d'une </p>
                 <span >formation certifiante</span>
            </div>
        
        </Col>
        <Col sm={4}>
        <div className='info-contact-centre-formation'>
               <h3>CONTACT INFO</h3> 
               <p> Rue de l'Eglise Ste-Anne 63, 1081 Koekelberg.</p>
               <p><span>Phone:</span> 02/445 39 08</p>
               <p><span>Email:</span> info@cfitech.be</p>
            </div>
        </Col>
        <Col sm={12}>
        <p className="copiright">Copyright 2021 CFITECH | Tous les droits réservés | cfitech.be | Espace étudiant | Webmail</p>
        </Col>
        <Col sm={12}>
            <div className="socials">
                <ul>
                    <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </Col>

      </Row>
    </Container>
  </section>
  )
}
