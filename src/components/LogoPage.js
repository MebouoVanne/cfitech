import React from 'react'
import Logo from '../assets/images/Logo.jpg'
import styled from 'styled-components';

export default function LogoPage() {
  return (
    <LogoStyled>
            <img src={Logo}/>
            <h1>CFITECH</h1>
    </LogoStyled>
  )
}
const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    h1{
        display: inline;
        text-align: center;
        color: #070707;
        /* font-size: 36; */
        /* line-height: 1em;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1.5px; */
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    img{
        object-fit: contain;
        object-position: center;
        height: 60px;
        width: 80px;
        margin: 0 5px;
    }
      
 
`;