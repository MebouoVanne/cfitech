import React from 'react'
import Header from './header/Header'
import styled from 'styled-components'

export default function OrderPage() {
    return ( <
        OrderPageStyle >

        <
        div className = 'navbar' >
        <
        Header / >
        <
        /div> <
        div className = 'content' > content < /div> <
        div className = 'footer' > footer < /div>

        <
        /OrderPageStyle>

    )
}

const OrderPageStyle = styled.div ` 
border: 1px solid yellow;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 15px;

.navbar{
    border: 1px solid red;
    height: 15vh;
    width: 100%;

}
.content{
    border: 1px solid green;
    height: 95vh;
    width: 100%;

}
.footer{
    border: 1px solid black;
    height: 15vh;
    width: 100%;

}


`