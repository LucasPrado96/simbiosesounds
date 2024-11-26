import { Link } from 'react-router-dom'
import Styled from 'styled-components'


export const Container = Styled.div`
background-color: black;
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content:center;

`


export const Footer = Styled.div`
background-color: black;




p{
    color: #919191;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    
}



`

export const A = Styled(Link)`
 color: white;
    cursor: pointer;
    text-decoration: none;
    margin-left: 70px;
    font-size: 19px;

    &:hover{
        text-decoration: underline;
    }

`