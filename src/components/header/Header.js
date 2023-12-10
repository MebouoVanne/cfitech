import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoPage from '../LogoPage';
import "./Header.css"

export default function Header() {
  return ( 
    <section  id="header">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <LogoPage/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/apropos">A propos</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/formation">Formation</Nav.Link>
            <Nav.Link href="/job">Jobs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  )
}








// import React from 'react'
// import styled from 'styled-components';
// import Logo from './LogoPage';


// export default function Header() {
//   return (
//     <Headerstyled>
//         <Logo/>
//         <div className='NavbarLeft'>
//             <p>Accueil</p>
//             <p>A Propos</p>
//             <p>Service</p>
//             <p>Contacts</p>
//             <p>Jobs</p>
//             <p>Formation</p>
//         </div>
//     </Headerstyled>

//   )
// }

// const Headerstyled = styled.nav`
// width: 100%;
// border: 1px solid red;
// height: 15vh;
// display: flex;
// flex-direction: row;
// justify-content:space-between;
// padding: 20px;
// background-color: #23B3C7;

//  .NavbarRight{
//     border: 1px solid green; 
//     display: flex;
//     align-items: center;
//     h1{
//         display: inline;
//         text-align: center;
//         color: #070707;
//         font-size: 36;
//         line-height: 1em;
//         font-weight: 700;
//         text-transform: uppercase;
//         letter-spacing: 1.5px;
//         font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     }
//     img{
//         object-fit: contain;
//         object-position: center;
//         height: 60px;
//         width: 80px;
//         margin: 0 5px;
//     }

//  }
//  .NavbarLeft{
//     border: 1px solid yellow;  
//     display: flex;
//     flex-direction: row;
//     justify-content:space-between;
//     padding: 0px;
//     p{
//         padding-left: 75px;
//         font-weight: 500;
//         text-transform: uppercase;
//         font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//         font-size: 16;

//     }
//  }

// `;