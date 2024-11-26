import Styled, { css } from 'styled-components'
import Bg from '../../assets/capaNova.jpg'
import { fadeOut, fadeIn } from './animation'


export const Container = Styled.div`
background-color: black;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;


`


export const Header = Styled.header`
background-color: black;
display: flex;
align-items:center;
gap: 30px;
justify-content: space-between;

a{
    color: white;
    cursor: pointer;
    text-decoration: none;
    margin-left: 60px;
    font-size: 18px;

    &:hover{
        text-decoration: underline;
    }
}

img{
    width: 80px;
    padding: 10px;
    margin-left: 15px;
}
`

export const Main = Styled.div`
background-color: #111212;
display: flex;
align-items: start;
flex-direction: column;
flex-grow: 1; 

`


export const Pinfo = Styled.p`
font-family: "Roboto", sans-serif;
color: #919191;
font-size: 15px;

`


export const Ptext = Styled.p`
color: white;
font-size: 18px;
text-align: center;
margin-top: 15px;
font-weight: 600;
`

export const Container1 = Styled.div`
background-image: url('${Bg}');
height: 330px;
width: 100%;
background-size: cover;


`

export const Mask = Styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); 
  opacity: 1;
  transition: opacity 2s ease;
 
  ${({ $fade }) => $fade && css` animation: ${fadeOut} 2s forwards;`}
 

 
`;

export const IntroText = Styled.p`
    color: white;
    font-size: 18px;
    text-align: center;
    position: relative;
    z-index: 1;
    top: -250px;
    transition: opacity 2s ease;
    font-weight: 600;
    ${({ $fade }) => $fade && css` animation: ${fadeOut} 2s forwards;`}

`

export const IconImg = Styled.a`
cursor: pointer;
`


export const ContainerLinks = Styled.div`
    display:  ${({ $visible }) => ($visible ? "flex" : "none")};
    justify-content: center;
    gap: 30px;
    margin-top: -45px;
   
    background-color: rgba(252, 239, 210, 0.8);
    padding: 8px;
    transition: 2s ease;
    ${({ $fade }) => $fade && css` animation: ${fadeIn} 2s forwards;`}
    



    .icons{
    width: 30px;
    display: flex;
    justify-content: center;
    transition: 200ms;


    @media (max-width: 344px){
        width: 27px;
}

    &:hover{
        opacity: 0.6;
        
    }
}

@media (max-width: 344px){
    gap: 25px;
}


`

export const Container2 = Styled.div`
width: 100%;

margin-top: 50px;
display: flex;
justify-content: center;

.Player{
width: 50%;
padding: 20px;

@media (max-width: 620px){
    width: 100%;
}
}

.Maps{
 width: 50%;
padding: 20px;

@media (max-width: 620px){
    width: 100%;
}

}

.textInfo{
width: 550px;
margin-top: 50px;
}


@media (max-width: 620px){
    flex-direction: column;
}
`