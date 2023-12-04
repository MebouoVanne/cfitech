import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/images/Logo.jpg'

export default function Header() {
  return (
    <Headerstyled>
        <div className='NavbarRight'>
            <img src={Logo}/>
            <h1>CFITECH</h1>
        </div>
        <div className='NavbarLeft'>
            <p>Accueil</p>
            <p>A Propos</p>
            <p>Service</p>
            <p>Contacts</p>
            <p>Jobs</p>
            <p>Formation</p>
        </div>
    </Headerstyled>
    
  )
}

const Headerstyled = styled.nav`
width: 100%;
border: 1px solid red;
height: 70px;
display: flex;
flex-direction: row;
justify-content:space-between;
padding: 20px;
background-color: #23B3C7;

 .NavbarRight{
    border: 1px solid green; 
    display: flex;
    align-items: center;
    h1{
        display: inline;
        text-align: center;
        color: #070707;
        font-size: 36;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    img{
        object-fit: contain;
        object-position: center;
        height: 60px;
        width: 80px;
        margin: 0 5px;
    }
      
 }
 .NavbarLeft{
    border: 1px solid yellow;  
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding: 0px;
    p{
        padding-left: 75px;
        font-weight: 500;
        text-transform: uppercase;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16;
        
    }
 }
  
`;
