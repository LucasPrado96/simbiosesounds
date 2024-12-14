import { Link } from 'react-router-dom'
import Styled, {keyframes} from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';


const slideDown = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;


export const Container = Styled.div`
background-color: black;
width: 100%;


`


export const Header = Styled.header`
background-color: black;
display: flex;
align-items:center;
gap: 30px;
justify-content: space-around;
height: 70px;



img{
    width: 60px;
    padding: 5px;
    
   
}

@media (max-width: 620px){
display: none;
}
`

export const A = Styled(Link)`
    color: white;
    cursor: pointer;
    text-decoration: none;
    margin-left: 20px;
    font-size: 18px;

    &:hover{
        text-decoration: underline;
    }
    
`

export const HeaderResponsivo = Styled.div`
background-color: black;
display: none;
align-items:center;
gap: 30px;




img{
    width: 60px;
    padding: 8px;
    


  
}



@media (max-width: 620px){
display: flex;
align-items: center;
justify-content: space-around; 
}
`

export const MenuIconStyled = Styled(MenuIcon)`
color: white;
cursor: pointer;


`

export const OptionsMenu = Styled.div`
display: flex;
flex-direction: column;
height: 390px;
width: 92%;
position: absolute;
top: 60px;
left: 15px;
align-items: center;
background-color: #333333;
border-radius: 5px;
align-items:center;
z-index: 99999;
animation: ${slideDown} 0.5s ease forwards;



img{
    width: 100px;
    margin-top: 26px;
  

}


`

export const AResponsive = Styled(Link)`
    color: white;
    cursor: pointer;
    text-decoration: none;
    margin-top: 20px;
    font-size: 25px;

    &:hover{
        text-decoration: underline;
    }

`